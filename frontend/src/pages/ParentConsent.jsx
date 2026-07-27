import Header from '../components/parent/Header';
import StudentInformation from '../components/parent/StudentInformation';
import VaccineHistory from '../components/parent/VaccineHistory';
import HealthHistory from '../components/parent/HealthHistory';
import ConsentForVaccination from '../components/parent/ConsentForVaccination';
import ConsentDeclaration from '../components/parent/ConsentDeclaration';
import SubmitButton from '../components//parent/SubmitButton';

function ParentConsent() {

    const [consentForm, setConsentFrom] = useState({
        studentInformation: {
            lastName: "",
            firstName: "",
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
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <StudentInformation />
                <VaccineHistory />
                <HealthHistory />
                <ConsentForVaccination />
                <ConsentDeclaration />
                <SubmitButton />
            </form>
        </div>
    );
}

export default ParentConsent;