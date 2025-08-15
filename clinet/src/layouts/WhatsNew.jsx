import React from 'react'
import '../css/whatsnew.css'

function WhatsNew({show, setShow}) {

    const features = [
        {
            id: 1,
            featureIcon: '📚',
            featureTitle: 'Smart Library',
            featureTxt: 'Automatically sorts your books by genre and author for quick access.'
        },
        {
            id: 2,
            featureIcon: '🌓',
            featureTitle: 'Reading Mode',
            featureTxt: 'Switch between light and dark modes for a comfortable reading experience.'
        },
        {
            id: 3,
            featureIcon: '🔖',
            featureTitle: 'Quick Bookmarks',
            featureTxt: 'Your place is saved automatically so you can jump back in anytime.'
        },
        {
            id: 4,
            featureIcon: '📈',
            featureTitle: 'Reading Stats',
            featureTxt: 'Track your daily and monthly reading progress with ease.'
        },
    ]

    const handleContinue = () => {
        localStorage.setItem("hasSeenWhatsNew", "true");
        setShow(false);
    };

    return (
        <>
            <div className="Onboarding">
                <div className="onboardingAgreement">
                    <div className="onboardingFeaturesSection">
                        <div className="onboardingHeading">
                            <h2>What’s New in iRead</h2>
                        </div>
                        <div className="onboardingFeatures">
                            {
                                features.map((feature, index) => (
                                    <div className="Feature" key={index}>
                                        <div className="featureIcon">
                                            <h1>{feature.featureIcon}</h1>
                                        </div>
                                        <div className="featureText">
                                            <h3>{feature.featureTitle}</h3>
                                            <p>{feature.featureTxt}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="onboardingContinueSection">
                        <div className="privacyText">
                            <p>Privacy & Terms</p>
                            <p className="meta">Your data is stored securely and used only to improve iRead.We never sell your information. By continuing, you agree to use iRead responsibly.</p>
                        </div>
                        <div className="continueBtn">
                            <button onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatsNew