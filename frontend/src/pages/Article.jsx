import React from "react";

// JSON fictif
const mockData = {
  programme: {
    titre: "Émission Test",
    description: "Ceci est une émission de test.",
    date_diffusion: "2023-11-07",
    acteurs: ["Acteur 1", "Acteur 2", "Acteur 3"],
    realisateur: "Réalisateur Test",
  },
  metadata: {
    source: "Archive INA",
    format: "Vidéo HD",
    duree: "120 minutes",
  },
  extrait_video: {
    url: "https://example.com/video/test.mp4",
    thumbnail: "https://example.com/video/test_thumbnail.jpg",
  },
};

function Article() {
  return (
    <div>
      <h1>{mockData.programme.titre}</h1>
      <p>{mockData.programme.description}</p>
      <p>Date de diffusion : {mockData.programme.date_diffusion}</p>
      <p>Source : {mockData.metadata.source}</p>
      <video controls width="640" height="360">
        <source src={mockData.extrait_video.url} type="video/mp4" />
        <track
          src="captions_fr.vtt"
          kind="captions"
          srcLang="fr"
          label="french_captions"
        />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
}

export default Article;
