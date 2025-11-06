import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container, Button, Heading } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-20">
        <Container size="md">
          <div className="text-center">
            <div className="text-9xl font-bold text-neon mb-4">404</div>
            <Heading as="h1" className="mb-4">
              Page Not Found
            </Heading>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="primary" size="lg">
                Go Home
              </Button>
              <Button href="/quote" variant="outline" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
