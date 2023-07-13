import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './components/styled/GlobalStyle.styled';
import Header from './components/Header.component';
import SocialMedia from './components/SocialMedia/SocialMedia.component';
import DevImage from './components/DevImage.component';
import Button from './components/UI/Button.component';
import { scrollToSection } from './utils/helpers';
import Main from './components/Main.component';
import SkillsList from './components/Skills/SkillsList.component';
import ProjectsList from './components/Projects/ProjectsList.component';
import Footer from './components/Footer.component';
import Form from './components/Form/Form.component';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

const App = () => {
    const handleClick = (): void => {
        const contact = document.getElementById('contact') as HTMLElement;

        if (!contact) {
            return;
        }

        scrollToSection(contact);
    };

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            <Header>
                <div className="component__content">
                    <section className="header">
                        <div className="logo">
                            <h1>adamkeyes</h1>
                        </div>
                        <div className="social">
                            <SocialMedia />
                        </div>
                    </section>
                    <section className="main__image">
                        <div className="dev__image__container">
                            <DevImage />
                        </div>
                        <div className="tagline-cta">
                            <h2>
                                Nice to
                                <br /> meet you! I'm{' '}
                                <span className="dev-name">Adam Keyes</span>.
                            </h2>
                            <p>
                                Based in the UK, I'm a front-end developer
                                passionate about building accessible web apps
                                that users love.
                            </p>
                            <Button onClick={handleClick}>Contact Me</Button>
                        </div>
                    </section>
                </div>
            </Header>
            <Main>
                <div className="component__content">
                    <section className="skills__list">
                        <SkillsList />
                    </section>
                    <section className="projects__list">
                        <header>
                            <h2>Projects</h2>
                            <Button onClick={handleClick}>Contact Me</Button>
                        </header>
                        <ProjectsList />
                    </section>
                </div>
            </Main>
            <Footer>
                <div className="component__content">
                    <section id="contact" className="contact__form">
                        <div className="form__instructions">
                            <h2>Contact</h2>
                            <p>
                                I would love to hear about your project and how
                                I could help. Please fill in the form, and I’ll
                                get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="form__container">
                            <Form />
                        </div>
                    </section>
                    <section className="footer">
                        <div className="logo">
                            <h2>adamkeyes</h2>
                        </div>
                        <div className="social">
                            <SocialMedia />
                        </div>
                    </section>
                </div>
            </Footer>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: 'var(--web-margin-s)' }}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style: {
                        fontSize: 'var(--body-fsz-l)',
                        maxWidth: '375px',
                        padding: 'var(--web-padding-m) var(--web-padding-l)',
                        backgroundColor: 'var(--dark-gray)',
                        color: 'var(--white)',
                    },
                }}
            />
        </QueryClientProvider>
    );
};

export default App;
