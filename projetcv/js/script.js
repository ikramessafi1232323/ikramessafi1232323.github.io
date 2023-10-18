document.addEventListener("DOMContentLoaded", function () {
  // Assurez-vous que html2pdf est chargé
  if (typeof html2pdf !== "undefined") {
    console.log("html2pdf est chargée avec succès !");
    
    // Ajoutez l'événement de clic sur le bouton de téléchargement PDF ici
    document.getElementById('download-pdf').addEventListener('click', function () {
      const element = document.getElementById('pdf-content');
      html2pdf()
        .from(element)
        .outputPdf()
        .then(function (pdf) {
          pdf.save('mon_cv.pdf');
        });
    });
  } else {
    console.log("html2pdf n'est pas chargée. Assurez-vous que le chemin du fichier JavaScript est correct.");
  }
});
