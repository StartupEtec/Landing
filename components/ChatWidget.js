'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatCircle, Close, Send } from './Icons';

const ENDPOINT = process.env.NEXT_PUBLIC_CHAT_ENDPOINT || '/chat/api/channels/web';
const STORAGE_KEY = 'laborin-chat-session';

function formatMessage(text) {
  const parts = String(text ?? '')
    .split(/(<b>.*?<\/b>|https?:\/\/[^\s<]+)/g)
    .filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return <strong key={index}>{part.slice(3, -4)}</strong>;
    }

    if (/^https?:\/\//.test(part)) {
      return (
        <a key={index} href={part} target="_blank" rel="noreferrer">
          {part}
        </a>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const greeted = useRef(false);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    let id = window.localStorage.getItem(STORAGE_KEY);

    if (!id) {
      id =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? `web-${crypto.randomUUID()}`
          : `web-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem(STORAGE_KEY, id);
    }

    setSessionId(id);
  }, []);

  const sendRequest = useCallback(
    async (payload, userText) => {
      if (!sessionId || busy) return;

      if (userText) {
        setMessages((current) => [...current, { role: 'user', text: userText }]);
      }

      setBusy(true);
      setError('');

      try {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ sessionId, ...payload }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        const replies = Array.isArray(data.messages)
          ? data.messages.filter((item) => typeof item === 'string' && item.trim())
          : [];

        setMessages((current) => [
          ...current,
          ...replies.map((text) => ({ role: 'bot', text })),
        ]);
      } catch {
        setError('No pude conectar con el asistente. Intentá de nuevo en unos segundos.');
      } finally {
        setBusy(false);
      }
    },
    [busy, sessionId],
  );

  useEffect(() => {
    if (!open || !sessionId || greeted.current) return;

    greeted.current = true;
    sendRequest({ startParam: 'landing' });
  }, [open, sendRequest, sessionId]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = draft.trim();

    if (!text || busy) return;

    setDraft('');
    sendRequest({ text }, text);
  };

  return (
    <>
      <button
        type="button"
        className="chat-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="laborin-chat-panel"
        aria-label={open ? 'Cerrar chat con Laborin' : 'Abrir chat con Laborin'}
      >
        <ChatCircle size={20} />
        <span className="chat-toggle-label">{open ? 'Cerrar chat' : 'Chatear'}</span>
      </button>

      {open && (
        <section
          className="chat-panel"
          id="laborin-chat-panel"
          aria-label="Chat con Laborin"
        >
          <header className="chat-header">
            <div>
              <p className="chat-title">Asistente de <span translate="no">Laborin</span></p>
              <p className="chat-status">Respuestas sobre la plataforma</p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
            >
              <Close size={18} />
            </button>
          </header>

          <div className="chat-log" ref={logRef} aria-live="polite" aria-relevant="additions">
            <p className="chat-bubble chat-bubble--bot">
              {formatMessage('Hola. Preguntame qué es Laborin, cómo funciona o qué roles hay.')}
            </p>
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`chat-bubble chat-bubble--${message.role}`}
              >
                {formatMessage(message.text)}
              </p>
            ))}
            {busy && <p className="chat-hint">Escribiendo…</p>}
            {error && (
              <p className="chat-error" role="alert">
                {error}
              </p>
            )}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              Tu mensaje
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              className="chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Escribí tu pregunta"
              autoComplete="off"
              maxLength={500}
            />
            <button
              type="submit"
              className="chat-send"
              disabled={busy || !draft.trim()}
              aria-label="Enviar mensaje"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
