function SubmitButton({ isSubmitting }) {
    return (
        <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Form"}
        </button>
    );
}

export default SubmitButton;