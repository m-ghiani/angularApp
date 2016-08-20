/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ProducerService } from './producer.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Producer } from './producer.model';
import { Message } from './message.model';

describe('Service: Producer', () => {
  beforeEach(() => {
    addProviders([ProducerService,HTTP_PROVIDERS]);
  });
     it('  getAll() method testing',
    inject([ ProducerService],
      ( service:ProducerService) => {
        service.getAll()
            .subscribe(data => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "name": "Coca-Cola Bevande Italia Srl",
      "description": "Lo stabilimento di Rionero (Potenza) venne originariamente realizzato nel 1896 e poi ricostruito nel 1979. Coca-Cola HBC Italia vi opera dal 2006. Qui si imbottigliano alla fonte i marchi Lilia, Sveva in contenitori PET e vetro di vari formati."
    },
    {
      "_id": 2,
      "name": "Sanpellegrino S.p.A. Nestlè Waters Italia",
      "description": "Sanpellegrino occupa un posto di primo piano nel panorama delle aziende italiane con una storia ricca e radici lontane nel tempo. L’azienda, che rappresenta oggi la più grande realtà nel campo del beverage in Italia con un numero significativo di acque minerali, aperitivi analcolici, bibite e tè freddi, è riuscita negli anni ad affermarsi in 145 paesi nel mondo con prodotti di altissima qualità, accreditandosi come ambasciatore dell’inconfondibile Italian Style."
    },
    {
      "_id": 3,
      "name": "Ferrero",
      "description": "La Ferrero è un'azienda multinazionale italiana specializzata in prodotti dolciari, fondata da Pietro Ferrero nel 1946 ad Alba. La sede commerciale italiana si trova a Pino Torinese, ma tutti i prodotti Italiani vengono prodotti ancora tra Alba, che è anche sede legale ed amministrativa, Pozzuolo Martesana (MI), Balvano (PZ), Sant'Angelo dei Lombardi (AV)."
    },
    {
      "_id": 4,
      "name": "Quarta Caffè S.p.A.",
      "description": "Quarta Caffè S.p.A. è un'azienda italiana specializzata nella produzione del caffè, fondata a Lecce negli anni cinquanta, con sede a Lecce. Non è solo diffuso in tutta la Puglia ed in varie zone d'Italia ma anche in Svizzera, in Germania, in Grecia, in Albania ed in Belgio."
    },
    {
      "_id": 5,
      "name": "Star S.p.A.",
      "description": "Star Tea di Star S.p.A. è stato il primo tè in filtri lanciato in Italia. Una geniale invenzione che, a partire dagli anni ’60, ha contribuito alla diffusione del tè, creando una bevanda accessibile ad un pubblico più vasto."
    },
    {
      "_id": 6,
      "name": "Mondelēz International, Inc.",
      "description": "Mondelēz International, Inc. è un'azienda multinazionale degli Stati Uniti d'America attiva nel settore alimentare, con un organico di circa 110.000 persone in tutto il mondo. L'azienda tratta i marchi di prodotti alimentari e snack che in precedenza ricadevano sotto il marchio Kraft Foods."
    },
    {
      "_id": 7,
      "name": "Danone S.p.A.",
      "description": "La Danone è un'industria alimentare francese presente in 120 paesi"
    },
    {
      "_id": 8,
      "name": "Grissin Bon S.p.A.",
      "description": "Grissin Bon è un’azienda attiva nella produzione e commercializzazione di prodotti da forno, quali grissini e fette biscottate. L’azienda è presente nei diversi canali commerciali come grossisti, dettaglianti, indipendenti, nella grande distribuzione, nella distribuzione organizzata e nel catering. Grissin Bon produce anche a marchio privato per i principali gruppi che costituiscono la grande distribuzione nazionale ed estera."
    },
    {
      "_id": 9,
      "name": "Riso Scotti",
      "description": "RISO SCOTTI è la capogruppo di un team di aziende ad alto contenuto tecnologico, alcune specializzate nella coltivazione, ricerca e sperimentazione, altre nella lavorazione, trasformazione e commercializzazione del riso. Tradizione, tecnologia, investimenti, tanto impegno e tenacia si traducono in prodotti pensati per il consumatore che sa scegliere: che è al centro dei pensieri della Riso Scotti e che ne ispira la ricerca."
    },
    {
      "_id": 10,
      "name": "ICA Food S.p.A.",
      "description": "ICA FOODS è uno dei principali player a livello nazionale e internazionale nel settore della produzione e distribuzione di snacks salati"
    }
  ]
});
            },
            err => console.log(err));
      }));
  it('  getById() method testing',
    inject([ ProducerService],
      ( service:ProducerService) => {
        service.getById(1)
            .subscribe(data => {
                  expect(data).toEqual({
  "error": false,
  "message": [
    {
      "_id": 1,
      "name": "Coca-Cola Bevande Italia Srl",
      "description": "Lo stabilimento di Rionero (Potenza) venne originariamente realizzato nel 1896 e poi ricostruito nel 1979. Coca-Cola HBC Italia vi opera dal 2006. Qui si imbottigliano alla fonte i marchi Lilia, Sveva in contenitori PET e vetro di vari formati."
    }
  ]
});
            },
            err => console.log(err));
      })
  );
  it('  postProducer() method testing',
    inject([ ProducerService],
      ( service:ProducerService) => {
        var producer = new Producer();
        producer._id=11;
        producer.name="Coca-Cola Bevande Italia Srl";
        producer.description="Lo stabilimento di Rionero (Potenza) venne originariamente realizzato nel 1896 e poi ricostruito nel 1979. Coca-Cola HBC Italia vi opera dal 2006. Qui si imbottigliano alla fonte i marchi Lilia, Sveva in contenitori PET e vetro di vari formati.";
        service.postProducer(producer)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data added"});
            },
            err => console.log(err));
      })
  );

  it('  putProducer() method testing',
    inject([ ProducerService],
      ( service:ProducerService) => {
        var producer = new Producer();
        producer._id=11;
        producer.name="Coca-Cola Bevande Srl";
        producer.description="Lo stabilimento di Rionero (Potenza) venne originariamente realizzato nel 1896 e poi ricostruito nel 1979. Coca-Cola HBC Italia vi opera dal 2006. Qui si imbottigliano alla fonte i marchi Lilia, Sveva in contenitori PET e vetro di vari formati.";
        service.putProducer(producer._id,producer)
            .subscribe(data => {
                  expect(data).toEqual({"error": false,"message": "Data Modified"});
            },
            err => console.log(err));
      })
  );

  it('deleteProducer() method testing',
    inject([ ProducerService],
      ( service:ProducerService) => {
        var producer = new Producer();
        producer._id=11;
        service.deleteProducer(producer._id)
            .subscribe(data => {   
                  expect(data).toEqual({ });            
                  
            },
            err => console.log(err));
      })
  );
});