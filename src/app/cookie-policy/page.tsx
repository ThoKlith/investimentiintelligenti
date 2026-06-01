export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-surface py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl prose prose-blue max-w-none">
        <h1 className="text-3xl md:text-5xl font-bold text-accent mb-4">Cookie Policy</h1>
        <p className="text-sm text-accent/60 mb-12">Ultimo aggiornamento in data 20 Febbraio 2023</p>

        <p>Questo sito utilizza cookie. I cookie utilizzati sono di due tipologie: cookie tecnici e cookie di terze parti.</p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Cosa sono i cookie?</h2>
        <p>
          I cookie sono generalmente piccoli file di testo che vengono salvati dai siti sul dispositivo e sono utilizzato per scopi di varia natura.
        </p>
        <p>
          I cookie possono essere di sessione o persistenti a seconda del tempo per il quale permangono sul dispositivo prima di essere automaticamente cancellati.
        </p>
        <p>
          I cookie possono essere tecnici o più specifici (di preferenza, di profilazione...) e possono essere di prima parte, ossia gestiti dal sito stesso, o di terza parte, ossia gestiti da servizi di terzi esterni al sito.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">I cookie utilizzati sul sito</h2>
        <p>
          Di seguito la classificazione delle tipologie di cookie utilizzate. Le specifiche e le finalità dei singoli cookie saranno inserite mano a mano che questi cookie verranno attivati.
        </p>

        <h3 className="text-lg font-bold text-accent mt-6 mb-3">I cookie tecnici</h3>
        <p>
          I cookie di prima parte sono costituiti dalle poche informazioni necessarie al funzionamento vero e proprio dei componenti del sito, ad esempio quelle necessarie a mantenere attiva una sessione di log-in o registrare le informazioni necessarie per far funzionare un componente di gestione dei pop-up.
        </p>
        <p>
          Anche questi cookie possono essere disattivati, ma ciò può compromettere il corretto funzionamento del sito. Il sito attiva automaticamente questi cookie durante la navigazione. Rifiutare questi cookie può compromettere la navigazione sul sito.
        </p>

        <h3 className="text-lg font-bold text-accent mt-6 mb-3">Cookie di terzi</h3>
        <p>
          Il sito include servizi di terzi (o link alle loro piattaforme) quali Google, Facebook, Instagram e Youtube. Tali contenuti sono aggiunti ad esempio per utilizzare servizi di streaming o permettere la condivisione sulle piattaforme social più utilizzate; tuttavia, questo può implicare che tali provider terzi salvino ulteriori cookie sul dispositivo (prima o dopo l'interazione), sui quali non abbiamo il completo controllo, in particolar modo nel caso il visitatore abbia già avuto relazioni di un qualche tipo con i suddetti servizi terzi. Di conseguenza, si consiglia di consultare i siti web di tali terze parti e la loro informativa sulla privacy per ulteriori informazioni sui loro cookie e su come gestirli (soprattutto nel caso in cui si sia in possesso di un account).
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>YouTube</li>
          <li>Google</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Whatsapp (mobile)</li>
        </ul>
        <p>
          L'attivazione di questi servizi (ad eccezione dei link) è subordinata all'accettazione dei cookie sul sito.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Durata dei cookie</h2>
        <p>
          La durata di un cookie può variare dalla durata della singola sessione ad un tempo di al massimo 2 (due) anni. La durata della permanenza dei cookie sul dispositivo dipende però principalmente da come questo viene impostato e gestito.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Come gestire i cookie</h2>
        <p>
          I nostri sistemi invieranno cookie non tecnici solo dopo l'accettazione dei cookie sul sito tramite la scheda dedicata alla loro gestione. La scheda è accessibile, quando non già attiva, tramite l'etichetta "cookie" presente in basso a sinistra su tutte le pagine. Il rifiuto dei cookie tecnici tramite questa scheda potrebbe compromettere le funzionalità del sito.
        </p>
        <p>
          I cookie possono essere rifiutati autonomamente anche attivando nel browser l’impostazione che consente di rifiutare il salvataggio dei cookie, cancellandoli se già presenti. Questo eliminerà tutti i dati dal browser. Tuttavia, se si seleziona questa impostazione, potrebbe essere impossibile accedere ad alcune parti del sito o utilizzare determinate funzionalità.
        </p>
        <p>
          Per maggiori informazioni relativamente alle impostazioni di queste preferenze è possibile consultare le seguenti pagine:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Internet Explorer</li>
          <li>Firefox</li>
          <li>Chrome</li>
          <li>Safari</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Modifiche alla presente Cookie Policy</h2>
        <p>
          Le condizioni della presente Informativa possono cambiare di volta in volta. Pubblicheremo eventuali modifiche sostanziali alla presente informativa mediante debita comunicazione su questo sito web.
        </p>

        <h2 className="text-xl md:text-2xl font-bold text-accent mt-8 mb-4">Contatti</h2>
        <p>
          Domande, commenti e richieste riguardanti la presente informativa sono ben accetti e vanno rivolti a: <a href="mailto:amine.investimenti@gmail.com" className="text-blue-600 hover:underline">amine.investimenti@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
