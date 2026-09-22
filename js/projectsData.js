const projects = [
  {
    id: "cassava-rover",
    title: "Automated Cassava Mosaic Disease Detection Rover",
    thumbnail: "assets/images/cassava-rover/thumb.jpg",
    summary: "An autonomous agricultural rover featuring edge AI (ResNet-152) on Raspberry Pi 5 and dual stepper motors for early CMV disease identification in cassava crops.",
    description: "The Automated Cassava Mosaic Disease Detection Rover is an edge-AI agricultural solution designed to empower smallholder farmers. Built on a rugged iron chassis with dual NEMA 17 stepper motors and front-axle servo steering, it navigates crop rows autonomously. Equipped with ultrasonic sensors for row boundary tracking and plant proximity detection, it uses an onboard Raspberry Pi 5 to process high-resolution leaf imagery in real time.",
    progressImages: [
      { url: "assets/images/cassava-rover/progress-1.jpg", caption: "Iron chassis frame assembly" },
      { url: "assets/images/cassava-rover/progress-2.jpg", caption: "Custom 12V Li-ion battery & BMS wiring" }
    ],
    resultsText: "The system achieved an 84% validation accuracy using a fine-tuned ResNet-152 deep learning model. Field trials demonstrated stable navigation with an average detection and processing time of 10.5 seconds per plant.",
    resultsImages: [
      { url: "assets/images/cassava-rover/result-1.jpg", caption: "Validation accuracy curve (84%)" }
    ]
  }
];