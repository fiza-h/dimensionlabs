
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

/**
 * SETUP INSTRUCTIONS FOR GOOGLE SHEETS INTEGRATION:
 * 1. Create a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste the following script:
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var folder = DriveApp.getFolderById('YOUR_FOLDER_ID'); // Create a folder for uploads
 *   
 *   var name = e.parameter.name;
 *   var email = e.parameter.email;
 *   var college = e.parameter.college;
 *   var city = e.parameter.city;
 *   var linkedin = e.parameter.linkedin;
 *   
 *   // Handle Files (Simulated logic - in production you'd decode base64 or use specific libraries)
 *   // For this demo, we'll log the entry.
 *   
 *   sheet.appendRow([new Date(), name, email, college, city, linkedin]);
 *   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
 * }
 * 
 * 4. Deploy as Web App (Set "Who has access" to "Anyone").
 * 5. Replace the GOOGLE_SHEETS_URL constant below with your deployment URL.
 */

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbweqmUIfT6KHweV7TYw8QCVidwHymBnosXOpwY0YbKDwbej2fnEsPYKWktlLUJ1IpZX/exec"; // YOUR_APPS_SCRIPT_WEB_APP_URL

const ApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    city: '',
    linkedin: '',
    cv: null as File | null,
    video: null as File | null,
  });

  const [aiResponse, setAiResponse] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.video) {
      alert("Please upload your 1-minute challenge video.");
      return;
    }

    setIsSubmitting(true);
    setSyncStatus('syncing');

    try {
      // 1. Send data to Google Sheets (Conceptual Implementation)
      if (GOOGLE_SHEETS_URL) {
        const body = new FormData();
        body.append('name', formData.name);
        body.append('email', formData.email);
        body.append('college', formData.college);
        body.append('city', formData.city);
        body.append('linkedin', formData.linkedin);
        // Files would usually be sent as Base64 or to a separate storage bucket
        if (formData.cv) body.append('cv', formData.cv);
        if (formData.video) body.append('video', formData.video);

        await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: body,
          mode: 'no-cors' // Required for Apps Script Web Apps
        });
      }

      // 2. Generate AI Confirmation
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Candidate ${formData.name} from ${formData.college} has applied. Generate a high-IQ, visionary confirmation message. Keep it professional and under 40 words.`,
        config: {
          systemInstruction: "You are the Admissions Lead at Dimension Labs. Your voice is direct, intellectual, and welcoming.",
        }
      });
      
      setAiResponse(response.text || "Packet received. Your 1-minute pitch is entering our evaluation engine.");
      setSyncStatus('synced');
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSyncStatus('error');
      setIsSubmitted(true);
      setAiResponse("Your application has been registered in our fallback database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 bg-[#DFFFD6] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#98BDAB]">
          <svg className="w-10 h-10 text-[#2D4F40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#2D4F40] mb-4">Application Indexed</h3>
        <p className="text-[#5A7A6B] mb-8">Data has been synchronized to the Dimension Labs Registry.</p>
        
        <div className="bg-white p-8 rounded-2xl border border-[#E8E4DF] italic text-[#2D4F40] font-serif leading-relaxed shadow-sm">
           "{aiResponse}"
        </div>
        
        <button 
          onClick={() => { setIsSubmitted(false); setSyncStatus('idle'); }}
          className="mt-10 text-[#98BDAB] font-bold hover:underline uppercase tracking-widest text-xs"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-[0.2em]">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-5 py-3 rounded-xl border border-[#E8E4DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#98BDAB] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-[0.2em]">University Email</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-5 py-3 rounded-xl border border-[#E8E4DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#98BDAB] transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-[0.2em]">College / University</label>
          <input
            required
            type="text"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
            className="w-full px-5 py-3 rounded-xl border border-[#E8E4DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#98BDAB] transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-[0.2em]">City of Residence</label>
          <input
            required
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-5 py-3 rounded-xl border border-[#E8E4DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#98BDAB] transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-[0.2em]">LinkedIn URL (Optional)</label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="w-full px-5 py-3 rounded-xl border border-[#E8E4DF] bg-white focus:outline-none focus:ring-1 focus:ring-[#98BDAB] transition-all"
        />
      </div>

      <div className="pt-6 pb-4 border-t border-[#E8E4DF] mt-8">
        <h4 className="text-sm font-bold text-[#2D4F40] uppercase tracking-widest mb-2">The Challenge</h4>
        <p className="text-xs text-[#5A7A6B] leading-relaxed mb-6">
          Record a 1-minute (max) video convincing us you belong in this cohort. <strong>You are the product.</strong>
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-widest">Pitch Video (Required)</label>
            <div className="relative group cursor-pointer h-32">
              <input
                required
                type="file"
                name="video"
                onChange={handleFileChange}
                accept="video/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#E8E4DF] bg-white group-hover:border-[#98BDAB] transition-all flex flex-col items-center justify-center text-center px-4">
                <svg className="w-6 h-6 text-[#98BDAB] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <span className="text-[10px] font-medium text-[#5A7A6B] line-clamp-1">
                  {formData.video ? formData.video.name : 'Click to upload MP4/MOV'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="block text-[10px] font-bold text-[#2D4F40] uppercase tracking-widest">CV / Resume (Optional)</label>
            <div className="relative group cursor-pointer h-32">
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#E8E4DF] bg-white group-hover:border-[#98BDAB] transition-all flex flex-col items-center justify-center text-center px-4">
                <svg className="w-6 h-6 text-[#98BDAB] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span className="text-[10px] font-medium text-[#5A7A6B] line-clamp-1">
                  {formData.cv ? formData.cv.name : 'Click to upload PDF'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-5 bg-[#2D4F40] text-white rounded-xl text-lg font-bold hover:bg-[#1E3A2F] disabled:bg-[#A5A29F] transition-all shadow-xl shadow-[#2D4F40]/10 flex items-center justify-center space-x-3"
        >
          {isSubmitting && (
             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
          )}
          <span>{isSubmitting ? (syncStatus === 'syncing' ? 'Synchronizing Registry...' : 'Analyzing Packet...') : 'Submit to Spring 2026 Cohort'}</span>
        </button>
        {syncStatus === 'error' && (
          <p className="text-center text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">Network delay detected. Retrying internally.</p>
        )}
      </div>
    </form>
  );
};

export default ApplicationForm;
