'use client';

import { useState } from 'react';
import { X, Calendar, Phone, Mail, MapPin, School, Plus, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Note {
  id: string;
  text: string;
  created_at: string;
  author: string;
}

interface TimelineEvent {
  id: string;
  type: string;
  text: string;
  created_at: string;
  user: string;
}

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  school_id: string;
  school_name: string;
  created_at: string;
  status: 'new' | 'contacted' | 'processing' | 'closed';
  notes: Note[];
  timeline: TimelineEvent[];
  visited_schools?: { id: string; name: string; timestamp: string }[];
}

export default function RecentLeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const openDrawer = (lead: Lead) => {
    setSelectedLead(lead);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLead(null);
    setNewNote('');
  };

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (res.ok) {
        const updatedLead = await res.json();
        // Update local list state
        setLeads(leads.map(l => l.id === leadId ? updatedLead : l));
        // Update currently viewed lead in drawer
        setSelectedLead(updatedLead);
      }
    } catch (err) {
      console.error('Failed to change status:', err);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNote.trim() || isSaving) return;

    setIsSaving(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, noteText: newNote }),
      });

      if (res.ok) {
        const updatedLead = await res.json();
        // Update states
        setLeads(leads.map(l => l.id === selectedLead.id ? updatedLead : l));
        setSelectedLead(updatedLead);
        setNewNote('');
      }
    } catch (err) {
      console.error('Failed to add note:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#c7f0da] text-[#103c25]">
            <AlertCircle size={12} className="animate-pulse" />
            Mới
          </span>
        );
      case 'contacted':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Phone size={12} />
            Đã liên hệ
          </span>
        );
      case 'processing':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
            <Clock size={12} />
            Đang xử lý
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#e5e5e0] text-[#62625b]">
            <CheckCircle size={12} />
            Đóng
          </span>
        );
      default:
        return null;
    }
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="font-sans">
      <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#e5e5e0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fbfbf9] border-b border-[#dadad3]">
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Họ tên</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Điện thoại</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Tỉnh thành</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Trường quan tâm</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Thời gian</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 text-xs font-bold text-[#000000] uppercase tracking-wider text-right">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e5e0]">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-[#91918c] text-sm font-medium">
                    Chưa có đăng ký tư vấn nào mới.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#fbfbf9]/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-[#000000]">{lead.name}</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#211922]">{lead.phone}</td>
                    <td className="px-6 py-4 text-sm text-[#33332e]">{lead.city}</td>
                    <td className="px-6 py-4 text-sm text-[#33332e] max-w-[200px] truncate" title={lead.school_name}>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e60023]"></span>
                        {lead.school_name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-[#62625b]">{formatDate(lead.created_at)}</td>
                    <td className="px-6 py-4 text-sm">{getStatusBadge(lead.status)}</td>
                    <td className="px-6 py-4 text-sm text-right space-x-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"
                        title="Gọi điện"
                      >
                        <Phone size={14} />
                      </a>
                      <button
                        onClick={() => openDrawer(lead)}
                        className="px-3 py-1.5 rounded-[12px] bg-[#e5e5e0] hover:bg-[#c8c8c1] active:scale-95 text-xs font-bold text-[#000000] transition-all cursor-pointer"
                      >
                        Chi tiết
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drawer Details & Notes */}
      {isDrawerOpen && selectedLead && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Dimmed Backdrop Scrim */}
          <div
            className="absolute inset-0 bg-black/40 transition-opacity cursor-pointer"
            onClick={closeDrawer}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full rounded-l-[32px] border-l border-[#e5e5e0]">
              {/* Drawer Header */}
              <div className="p-6 border-b border-[#e5e5e0] flex items-center justify-between bg-[#fbfbf9] rounded-tl-[32px]">
                <div>
                  <h3 className="text-lg font-bold text-[#000000]">{selectedLead.name}</h3>
                  <p className="text-xs text-[#62625b] mt-1 flex items-center gap-1.5">
                    <Calendar size={12} /> Đăng ký lúc: {formatDate(selectedLead.created_at)}
                  </p>
                </div>
                <button
                  onClick={closeDrawer}
                  className="w-10 h-10 rounded-full hover:bg-[#e5e5e0] text-[#33332e] flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Status Selector */}
                <div className="bg-[#f6f6f3] p-4 rounded-[20px] border border-[#e5e5e0]">
                  <label className="block text-xs font-bold text-[#000000] uppercase tracking-wider mb-2">
                    Trạng thái xử lý
                  </label>
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                    className="w-full h-11 px-3 rounded-[12px] border border-[#dadad3] bg-white text-sm font-semibold focus:border-black focus:ring-1 focus:ring-black outline-none"
                  >
                    <option value="new">🆕 Mới (Chưa xử lý)</option>
                    <option value="contacted">📞 Đã liên hệ</option>
                    <option value="processing">⚙️ Đang xử lý</option>
                    <option value="closed">✅ Đóng (Hoàn tất)</option>
                  </select>
                </div>

                {/* General Information Card */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider">Thông tin liên hệ</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-[#33332e]">
                      <div className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#62625b]">
                        <Phone size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-[#62625b]">Số điện thoại</p>
                        <a href={`tel:${selectedLead.phone}`} className="font-semibold text-blue-600 hover:underline">
                          {selectedLead.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#33332e]">
                      <div className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#62625b]">
                        <Mail size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-[#62625b]">Email</p>
                        <p className="font-semibold">{selectedLead.email || 'Chưa cung cấp'}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#33332e]">
                      <div className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#62625b]">
                        <MapPin size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-[#62625b]">Tỉnh thành</p>
                        <p className="font-semibold">{selectedLead.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#33332e]">
                      <div className="w-8 h-8 rounded-full bg-[#f6f6f3] flex items-center justify-center text-[#62625b]">
                        <School size={14} />
                      </div>
                      <div>
                        <p className="text-xs text-[#62625b]">Trường học quan tâm</p>
                        <p className="font-semibold text-[#e60023]">{selectedLead.school_name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visited Schools List */}
                {selectedLead.visited_schools && selectedLead.visited_schools.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-[#e5e5e0]">
                    <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider">
                      Lịch sử xem trường ({selectedLead.visited_schools.length})
                    </h4>
                    <div className="space-y-2 bg-[#fbfbf9] p-3 rounded-[16px] border border-[#e5e5e0]">
                      {selectedLead.visited_schools.map((school: any, sIdx: number) => (
                        <div key={sIdx} className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-[#33332e] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e60023]"></span>
                            {school.name}
                          </span>
                          <span className="text-[#91918c]">
                            {formatDate(school.timestamp)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Internal Notes Section */}
                <div className="space-y-4 pt-4 border-t border-[#e5e5e0]">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider">Ghi chú nội bộ</h4>

                  {/* Add Note Form */}
                  <form onSubmit={handleAddNote} className="space-y-3">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Nhập ghi chú chi tiết cuộc gọi, tư vấn..."
                      className="w-full p-3 min-h-[80px] rounded-[16px] border border-[#dadad3] text-sm transition-all focus:border-black outline-none placeholder-[#91918c]"
                    />
                    <div className="text-right">
                      <button
                        type="submit"
                        disabled={!newNote.trim() || isSaving}
                        className="px-4 py-2 bg-[#e60023] hover:bg-[#cc001f] text-white text-xs font-bold rounded-[12px] flex items-center gap-1.5 ml-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Plus size={14} /> Ghi chú
                      </button>
                    </div>
                  </form>

                  {/* Notes List */}
                  <div className="space-y-3">
                    {selectedLead.notes.length === 0 ? (
                      <p className="text-xs text-[#91918c] text-center italic">Chưa có ghi chú nội bộ.</p>
                    ) : (
                      selectedLead.notes.map((note) => (
                        <div key={note.id} className="p-3 bg-[#fbfbf9] border border-[#e5e5e0] rounded-[16px] text-xs">
                          <p className="text-[#33332e] leading-relaxed whitespace-pre-line">{note.text}</p>
                          <div className="mt-2 text-[10px] text-[#91918c] flex justify-between items-center">
                            <span>Bởi: {note.author}</span>
                            <span>{formatDate(note.created_at)}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Audit Timeline */}
                <div className="space-y-4 pt-4 border-t border-[#e5e5e0]">
                  <h4 className="text-sm font-bold text-[#000000] uppercase tracking-wider">Lịch sử hoạt động</h4>
                  <div className="relative border-l border-[#e5e5e0] ml-3 pl-5 space-y-4">
                    {selectedLead.timeline.map((event) => (
                      <div key={event.id} className="relative text-xs">
                        {/* Dot Indicator */}
                        <span className="absolute -left-[26px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white bg-[#e60023]"></span>
                        <p className="font-bold text-[#211922]">{event.text}</p>
                        <div className="mt-1 text-[10px] text-[#91918c] flex items-center gap-2">
                          <span>{event.user}</span>
                          <span>•</span>
                          <span>{formatDate(event.created_at)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
