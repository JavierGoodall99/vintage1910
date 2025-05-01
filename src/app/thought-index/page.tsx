import ThoughtIndex from '@/components/ThoughtIndex';

export default function ThoughtIndexPage() {
    return (
        <div>

            <div className="journal-container">
                <header className="journal-header">
                    <h1>The Aetheric Thought Compendium</h1>
                    <div className="journal-subtitle">A collection of philosophical reflections and scientific speculations
                        from the brightest minds of our modern era.</div>
                </header>
                <ThoughtIndex />
                <footer className="journal-footer">
                    <p>Published by the Royal Society of Sciences • London, England • Est. 1660</p>
                </footer>
            </div>

        </div>
    );
}