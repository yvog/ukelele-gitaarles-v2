import { HeaderNavigation, LayoutMeta } from '../components';
import { Button } from '../components/button/button';

export default function NotFound() {
  return (
    <>
      <LayoutMeta
        title="Pagina niet gevonden"
        description="De opgevraagde pagina kon helaas niet worden gevonden."
        robots={['noindex', 'nofollow']}
      />

      <div className="main-container header">
        <HeaderNavigation variant="black" />
      </div>

      <main>
        <div className="main-container body">
          <div>
            <div>
              <h2>Pagina niet gevonden</h2>
              <p>De opgevraagde pagina kon helaas niet worden gevonden.</p>
              <Button filled href="/">
                Terug naar home
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
