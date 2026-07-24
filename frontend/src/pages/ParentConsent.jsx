import Header from '../components/Header';
import StudentInformation from '../components/StudentInformation';
import VaccineHistory from '../components/VaccineHistory';
import HealthHistory from '../components/HealthHistory';
import ConsentForVaccination from '../components/ConsentForVaccination';
import ConsentDeclaration from '../components/ConsentDeclaration';
import SubmitButton from '../components/SubmitButton';

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