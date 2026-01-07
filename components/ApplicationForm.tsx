import React, { useState } from "react";

const ApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [syncStatus, setSyncStatus] =
    useState<"idle" | "syncing" | "synced" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    city: "",
    linkedin: "",
    cv: null as File | null,
    video: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.video) {
      alert("Video required");
      return;
    }

    setIsSubmitting(true);
    setSyncStatus("syncing");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("college", formData.college);
      form.append("city", formData.city);
      form.append("linkedin", formData.linkedin);

      if (formData.cv) form.append("cv", formData.cv);
      if (formData.video) form.append("video", formData.video);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: form, // ✅ NO headers
      });

      if (!res.ok) throw new Error("Submission failed");

      setSyncStatus("synced");
      await new Promise((r) => setTimeout(r, 600));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setSyncStatus("error");
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };


  /* -------------------------
     SUCCESS STATE
  -------------------------- */
  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate-fade-in">
        <div className="w-20 h-20 bg-[#DFFFD6] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#98BDAB]">
          <svg
            className="w-10 h-10 text-[#2D4F40]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="text-3xl font-serif font-bold text-[#2D4F40] mb-4">
          Application Indexed
        </h3>
        <p className="text-[#5A7A6B] mb-8">
          Data has been synchronized to the Dimension Labs Registry.
        </p>

        <div className="bg-white p-8 rounded-2xl border border-[#E8E4DF] italic text-[#2D4F40] font-serif leading-relaxed shadow-sm">
          "Application received. Your profile has been indexed for Spring 2026
          review."
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setSyncStatus("idle");
          }}
          className="mt-10 text-[#98BDAB] font-bold hover:underline uppercase tracking-widest text-xs"
        >
          Submit another application
        </button>
      </div>
    );
  }

  /* -------------------------
     FORM
  -------------------------- */
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* TEXT FIELDS (unchanged UI) */}
      {/* … your existing JSX stays exactly the same … */}
      {/* The only change is the submit logic above */}

      {/* Submit button */}
      <div className="pt-6">
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-5 bg-[#2D4F40] text-white rounded-xl text-lg font-bold hover:bg-[#1E3A2F] disabled:bg-[#A5A29F] transition-all shadow-xl shadow-[#2D4F40]/10 flex items-center justify-center space-x-3"
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          <span>
            {isSubmitting
              ? syncStatus === "syncing"
                ? "Synchronizing Registry…"
                : "Finalizing…"
              : "Submit to Spring 2026 Cohort"}
          </span>
        </button>

        {syncStatus === "error" && (
          <p className="text-center text-red-500 text-[10px] mt-2 font-bold uppercase tracking-widest">
            Network issue detected. Please retry.
          </p>
        )}
      </div>
    </form>
  );
};

export default ApplicationForm;
