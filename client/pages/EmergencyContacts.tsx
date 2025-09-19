import DashboardLayout from "@/components/DashboardLayout";
import "../styles/style.css";
import { useEffect, useState } from "react";
import Page from "@/components/Page";

type Contact = { id: string; name: string; phone: string };
const KEY = "emergency_contacts";

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    setContacts(raw ? (JSON.parse(raw) as Contact[]) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts.slice(0, 3)));
  }, [contacts]);

  const add = () => {
    if (!name || !phone) return;
    if (contacts.length >= 3) return;
    setContacts([...contacts, { id: crypto.randomUUID(), name, phone }]);
    setName("");
    setPhone("");
  };
  const remove = (id: string) =>
    setContacts(contacts.filter((c) => c.id !== id));

  return (
    <Page className="dashboard-bg">
      <DashboardLayout>
        <div className="card wide" style={{ gridColumn: "span 3" }}>
          <h2 className="section-title">Emergency Contacts</h2>

          <div className="contacts">
            <div className="contacts-form">
              <input
                className="input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                className="btn-login"
                onClick={add}
                type="button"
                disabled={!name || !phone || contacts.length >= 3}
              >
                Add
              </button>
              <p className="muted">Up to 3 contacts.</p>
            </div>

            <ul className="contacts-list">
              {contacts.map((c) => (
                <li key={c.id} className="contact-item">
                  <div>
                    <strong>{c.name}</strong>
                    <div className="muted">{c.phone}</div>
                  </div>
                  <button
                    className="remove"
                    onClick={() => remove(c.id)}
                    aria-label={`Remove ${c.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
              {contacts.length === 0 && (
                <li className="muted">No contacts added yet.</li>
              )}
            </ul>
          </div>
        </div>
      </DashboardLayout>
    </Page>
  );
}
