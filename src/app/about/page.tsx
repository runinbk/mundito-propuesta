"use client";
import Image from 'next/image';
import { useI18n } from '@/context/i18n';

function AboutPage() {
    const { t } = useI18n();
    
    return (
        <div className="container py-12 md:py-20">
            <header className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{t('aboutTitle')}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t('introText')}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div className="order-2 md:order-1 space-y-4">
                    <h2 className="font-headline text-3xl font-bold">{t('aboutMissionTitle')}</h2>
                    <p className="text-muted-foreground text-lg">{t('aboutMissionText')}</p>
                </div>
                 <div className="order-1 md:order-2">
                    <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Our Team"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="happy children playing"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                 <div>
                    <Image 
                        src="https://placehold.co/600x400.png"
                        alt="Our Vision"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="toy store interior"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold">{t('aboutVisionTitle')}</h2>
                    <p className="text-muted-foreground text-lg">{t('aboutVisionText')}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
