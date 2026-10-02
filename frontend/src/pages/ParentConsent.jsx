import { useState } from "react";

import Header from "../components/parent/Header";
import StudentInformation from "../components/parent/StudentInformation";
import VaccineHistory from "../components/parent/VaccineHistory";
import HealthHistory from "../components/parent/HealthHistory";
import ConsentForVaccination from "../components/parent/ConsentForVaccination";
import ConsentDeclaration from "../components/parent/ConsentDeclaration";
import SubmitButton from "../components/parent/SubmitButton";

// Initial state - matches exactly what Postman sends
const INITIAL_STATE = {
  studentInformation: {
    firstName: "",     // ← Fixed: was "firstName" but make sure it matches
    lastName: "",      // ← Fixed: was "lastName"
    cardNumber: "",
    gender: "",
    dob: "",
    school: "",
    grade: "",
    studentClass: "",
    teacher: "",
    guardianPhone: ""
  },
  vaccineHistory: {
    meningococcal: {
      received: "",
      brand: "",
      dateReceived: ""
    },
    hpv: {
      received: "",
      brand: "",
      dateReceived: ""
    },
    hepatitisB: {
      received: "",
      brand: "",
      dateReceived: ""
    }
  },
  healthHistory: {
    allergy: {
      hasAllergy: "",
      details: ""
    },
    vaccineReaction: {
      hasReaction: "",
      details: ""
    },
    fainting: {
      hasHistory: "",
      details: ""
    },
    immuneSystem: {
      hasCondition: "",
      details: ""
    },
    seriousMedicalCondition: {
      hasCondition: "",
      details: ""
    }
  },
  consentForVaccination: {
    meningococcal: "",
    hpv: "",
    hepatitisB: ""
  },
  consentDeclaration: {
    relationshipToStudent: "",
    parentFirstName: "",
    parentLastName: "",
    parentEmail: "",
    parentPhone: "",
    signature: "",
    consentDate: "",
    confirmAccuracy: false
  }
};

function ParentConsent() {
  const [consentForm, setConsentForm] = useState(INITIAL_STATE);
  const [submissionState, setSubmissionState] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Handle flat fields (studentInformation, consentForVaccination, consentDeclaration)
  const handleChange = (section, e) => {
    const { name, value, type, checked } = e.target;
    
    setConsentForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };

  // Handle nested fields (vaccineHistory, healthHistory)
  const handleNestedChange = (section, item, e) => {
    const { name, value } = e.target;
    
    setConsentForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: {
          ...prev[section][item],
          [name]: value
        }
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionState("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/consent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(consentForm)
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const validationMessage = data.errors?.map((error) => error.msg).join(", ");
        throw new Error(validationMessage || data.message || "The consent could not be submitted.");
      }

      setSubmissionState("success");
      setSubmissionMessage(data.message || "Consent submitted successfully.");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionState("error");
      setSubmissionMessage(
        error instanceof TypeError
          ? "Could not connect to the consent server. Make sure the backend is running on port 3000."
          : error.message
      );
    }
  };

  return (
    <div>
      <Header />
      <form className="consent-form" onSubmit={handleSubmit}>
        <StudentInformation
          data={consentForm.studentInformation}
          handleChange={(e) => handleChange("studentInformation", e)}
        />

        <VaccineHistory
          data={consentForm.vaccineHistory}
          handleNestedChange={(item, e) => handleNestedChange("vaccineHistory", item, e)}
        />

        <HealthHistory
          data={consentForm.healthHistory}
          handleNestedChange={(item, e) => handleNestedChange("healthHistory", item, e)}
        />

        <ConsentForVaccination
          data={consentForm.consentForVaccination}
          handleChange={(e) => handleChange("consentForVaccination", e)}
        />

        <ConsentDeclaration
          data={consentForm.consentDeclaration}
          handleChange={(e) => handleChange("consentDeclaration", e)}
        />
        

        {submissionMessage && (
          <p className={`submission-message ${submissionState}`} role="status">
            {submissionMessage}
          </p>
        )}
        <SubmitButton isSubmitting={submissionState === "submitting"} />
      </form>
    </div>
  );
}

export default ParentConsent;