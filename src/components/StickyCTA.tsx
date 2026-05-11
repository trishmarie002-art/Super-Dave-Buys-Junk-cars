import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50">
      <div className="grid grid-cols-2 gap-4">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-brand-red text-white py-3 rounded font-black flex items-center justify-center gap-2 shadow-lg uppercase text-sm border-b-4 border-red-900"
        >
          <Phone size={16} />
          CALL NOW
        </a>
        <a 
          href={`sms:${BUSINESS_INFO.phone}`}
          className="bg-brand-blue text-white py-3 rounded font-black flex items-center justify-center gap-2 shadow-lg uppercase text-sm border-b-4 border-blue-900"
        >
          <MessageSquare size={16} />
          TEXT NOW
        </a>
      </div>
    </div>
  );
};
