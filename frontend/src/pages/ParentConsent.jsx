import Header from '../components/parent/Header';
import StudentInformation from '../components/parent/StudentInformation';
import VaccineHistory from '../components/parent/VaccineHistory';
import HealthHistory from '../components/parent/HealthHistory';
import ConsentForVaccination from '../components/parent/ConsentForVaccination';
import ConsentDeclaration from '../components/parent/ConsentDeclaration';
import SubmitButton from '../components//parent/SubmitButton';

function ParentConsent() {
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