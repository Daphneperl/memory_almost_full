// ASCII Art Elements for 3D Environment Framing
// These elements are designed to be random, asymmetrical and frame the 3D environment
// without overlapping with logos or header

// Function to generate random ASCII patterns
function generateRandomPatterns() {
  const patterns = {
    // Random dot clusters
    dotClusters: [
      "..  .  ..  .  ..  .  ..  .",
      ".  ...  .  ...  .  ...  .",
      "  ..  ..  ..  ..  ..  ..",
      "...  ...  ...  ...  ...",
      ".  .  .  .  .  .  .  .",
      "  ...  ...  ...  ...  ",
      "..  ..  ..  ..  ..  ..",
      ".  .  .  .  .  .  .  .",
      "  .  .  .  .  .  .  .  ",
      "...  .  ...  .  ...  .",
      "....  ....  ....  ....",
      ".  .  .  .  .  .  .  .  .",
      "  ....  ....  ....  ",
      "..  ..  ..  ..  ..  ..  ..",
      ".  .  .  .  .  .  .  .  .",
      "  ...  ...  ...  ...  ...",
      "....  .  ....  .  ....",
      ".  .  .  .  .  .  .  .  .",
      "  .  .  .  .  .  .  .  .  ",
      "....  ....  ....  ....",
    ],

    // Random line patterns
    linePatterns: [
      "---  ---",
      "  ---  ",
      "---  ---  ---",
      "  ---  ---",
      "---  ---  ---  ---",
      "  ---  ---  ---",
      "---  ---",
      "  ---  ---  ---",
      "---  ---  ---",
      "  ---  ---",
    ],

    // Random mixed patterns
    mixedPatterns: [
      "..  ---  ..",
      ".  ---  .",
      "  ..  ---  ..",
      "...  ---  ...",
      ".  ---  .",
      "  ...  ---  ...",
      "..  ---  ..",
      ".  ---  .",
      "  ..  ---  ..",
      "...  ---  ...",
    ],

    // Random bracket patterns
    bracketPatterns: [
      "[  ]  [  ]",
      "  [  ]  ",
      "[  ]  [  ]  [  ]",
      "  [  ]  [  ]",
      "[  ]  [  ]  [  ]  [  ]",
      "  [  ]  [  ]  [  ]",
      "[  ]  [  ]",
      "  [  ]  [  ]  [  ]",
      "[  ]  [  ]  [  ]",
      "  [  ]  [  ]",
    ],

    // Random slash patterns
    slashPatterns: [
      "/  /  /",
      "  /  /  ",
      "/  /  /  /",
      "  /  /  /",
      "/  /  /  /  /",
      "  /  /  /  /",
      "/  /  /",
      "  /  /  /  /",
      "/  /  /  /",
      "  /  /  /",
    ],

    // Random plus patterns
    plusPatterns: [
      "+  +  +  +  +  +  +  +",
      "  +  +  +  +  +  +  +  +  ",
      "+  +  +  +  +  +  +  +  +  +",
      "  +  +  +  +  +  +  +  +  +",
      "+  +  +  +  +  +  +  +  +  +  +",
      "  +  +  +  +  +  +  +  +  +  +",
      "+  +  +  +  +  +  +  +  +",
      "  +  +  +  +  +  +  +  +  +  +",
      "+  +  +  +  +  +  +  +  +  +",
      "  +  +  +  +  +  +  +  +  +",
    ],
  };

  return patterns;
}

// Function to create random ASCII frame elements positioned in margins
function createASCIIFrame() {
  const patterns = generateRandomPatterns();
  const frameContainer = document.createElement("div");
  frameContainer.id = "ascii-frame";
  frameContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 5;
    font-family: 'SourceCodePro', 'IBMPlexMono', monospace;
    font-size: 16px;
    color: #000000;
    opacity: 1;
  `;

  // Top margin patterns removed to avoid overlap with corner decorations

  // Top center horizontal line - positioned at same Y as corner clusters
  const topCenterLine = document.createElement("div");
  topCenterLine.style.cssText = `
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    text-align: center;
    line-height: 1.2;
  `;

  // Create a medium-length horizontal line with mixed patterns of slashes, dots, and plus signs
  const linePatterns = [];
  for (let i = 0; i < 8; i++) {
    const patternType = Math.random();
    let randomPattern;

    if (patternType < 0.33) {
      // Slash patterns
      randomPattern =
        patterns.slashPatterns[
          Math.floor(Math.random() * patterns.slashPatterns.length)
        ];
    } else if (patternType < 0.66) {
      // Dot patterns
      randomPattern =
        patterns.dotClusters[
          Math.floor(Math.random() * patterns.dotClusters.length)
        ];
    } else {
      // Plus patterns
      randomPattern =
        patterns.plusPatterns[
          Math.floor(Math.random() * patterns.plusPatterns.length)
        ];
    }
    linePatterns.push(randomPattern);
  }
  topCenterLine.innerHTML = linePatterns.join("&nbsp;&nbsp;&nbsp;");
  frameContainer.appendChild(topCenterLine);

  // Left and right margin patterns removed to avoid overlap with decoration frames

  // Bottom center horizontal line - short version
  const bottomCenterLine = document.createElement("div");
  bottomCenterLine.style.cssText = `
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    text-align: center;
    line-height: 1.2;
  `;

  // Create a short horizontal line with mixed patterns
  const bottomLinePatterns = [];
  for (let i = 0; i < 4; i++) {
    const patternType = Math.random();
    let randomPattern;

    if (patternType < 0.33) {
      // Slash patterns
      randomPattern =
        patterns.slashPatterns[
          Math.floor(Math.random() * patterns.slashPatterns.length)
        ];
    } else if (patternType < 0.66) {
      // Dot patterns
      randomPattern =
        patterns.dotClusters[
          Math.floor(Math.random() * patterns.dotClusters.length)
        ];
    } else {
      // Plus patterns
      randomPattern =
        patterns.plusPatterns[
          Math.floor(Math.random() * patterns.plusPatterns.length)
        ];
    }
    bottomLinePatterns.push(randomPattern);
  }
  bottomCenterLine.innerHTML = bottomLinePatterns.join("&nbsp;&nbsp;&nbsp;");
  frameContainer.appendChild(bottomCenterLine);

  return frameContainer;
}

// Function to create frame-like ASCII decorations
function createASCIIDecorations() {
  const patterns = generateRandomPatterns();
  const decorationsContainer = document.createElement("div");
  decorationsContainer.id = "ascii-decorations";
  decorationsContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 2;
    font-family: 'SourceCodePro', 'IBMPlexMono', monospace;
    font-size: 14px;
    color: #000000;
    opacity: 1;
  `;

  // Create frame elements with consistent margins
  const margin = 15; // Consistent margin from edges
  const cornerSize = 50; // Size for corner elements

  // Left vertical frame - long and vertical, avoiding corners
  const leftFrame = document.createElement("div");
  leftFrame.style.cssText = `
    position: absolute;
    left: ${margin}px;
    top: ${40 + margin + cornerSize + 20}px;
    bottom: ${margin + cornerSize + 50}px;
    width: 30px;
    text-align: left;
    line-height: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const leftPatterns = [];
  for (let i = 0; i < 10; i++) {
    const randomPattern =
      patterns.dotClusters[
        Math.floor(Math.random() * patterns.dotClusters.length)
      ];
    leftPatterns.push(`<div>${randomPattern}</div>`);
  }
  leftFrame.innerHTML = leftPatterns.join("");
  decorationsContainer.appendChild(leftFrame);

  // Right vertical frame - long and vertical, avoiding corners
  const rightFrame = document.createElement("div");
  rightFrame.style.cssText = `
    position: absolute;
    right: ${margin}px;
    top: ${40 + margin + cornerSize + 20}px;
    bottom: ${margin + cornerSize + 50}px;
    width: 30px;
    text-align: right;
    line-height: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const rightPatterns = [];
  for (let i = 0; i < 10; i++) {
    const randomPattern =
      patterns.mixedPatterns[
        Math.floor(Math.random() * patterns.mixedPatterns.length)
      ];
    rightPatterns.push(`<div>${randomPattern}</div>`);
  }
  rightFrame.innerHTML = rightPatterns.join("");
  decorationsContainer.appendChild(rightFrame);

  // Corner elements - L-shaped corners
  const corners = [
    { position: "top-left", top: `${40 + margin}px`, left: `${margin}px` },
    { position: "top-right", top: `${40 + margin}px`, right: `${margin}px` },
    {
      position: "bottom-left",
      bottom: `${margin + 30}px`,
      left: `${margin + 50}px`,
    },
  ];

  corners.forEach((corner) => {
    const cornerElement = document.createElement("div");
    cornerElement.style.cssText = `
      position: absolute;
      ${corner.top ? `top: ${corner.top};` : ""}
      ${corner.bottom ? `bottom: ${corner.bottom};` : ""}
      ${corner.left ? `left: ${corner.left};` : ""}
      ${corner.right ? `right: ${corner.right};` : ""}
      width: ${cornerSize}px;
      height: ${cornerSize}px;
      text-align: ${corner.left ? "left" : "right"};
      line-height: 1.3;
    `;

    // Generate L-shaped corner patterns
    const cornerPatterns = [];
    // Use 2 lines for bottom corners to avoid cropping, 3 for top corners
    const patternCount = corner.bottom ? 2 : 3;

    for (let i = 0; i < patternCount; i++) {
      const patternType = Math.random();
      let randomPattern;

      if (patternType < 0.5) {
        // Corner brackets
        randomPattern =
          patterns.bracketPatterns[
            Math.floor(Math.random() * patterns.bracketPatterns.length)
          ];
      } else {
        // Plus signs for corners
        randomPattern =
          patterns.plusPatterns[
            Math.floor(Math.random() * patterns.plusPatterns.length)
          ];
      }

      cornerPatterns.push(randomPattern);
    }

    cornerElement.innerHTML = cornerPatterns.join("<br>");
    decorationsContainer.appendChild(cornerElement);
  });

  return decorationsContainer;
}

// Function to animate ASCII patterns by changing one corner at a time
function animateASCIIPatterns() {
  const patterns = generateRandomPatterns();

  // Define the three corners
  const corners = ["top-left", "top-right", "bottom-left"];

  // Pick a random corner to update
  const randomCorner = corners[Math.floor(Math.random() * corners.length)];

  // Update the selected corner
  const decorationsContainer = document.getElementById("ascii-decorations");
  if (decorationsContainer) {
    // Find the cluster for the selected corner
    const clusters = decorationsContainer.querySelectorAll(
      'div[style*="position: absolute"]'
    );
    let targetCluster = null;

    // Find the cluster that matches our random corner
    clusters.forEach((cluster) => {
      const style = cluster.getAttribute("style");
      if (
        randomCorner === "top-left" &&
        style.includes("top: 50px") &&
        style.includes("left: 15px")
      ) {
        targetCluster = cluster;
      } else if (
        randomCorner === "top-right" &&
        style.includes("top: 50px") &&
        style.includes("right: 15px")
      ) {
        targetCluster = cluster;
      } else if (
        randomCorner === "bottom-left" &&
        style.includes("bottom: 45px") &&
        style.includes("left: 55px")
      ) {
        targetCluster = cluster;
      }
    });

    if (targetCluster) {
      // Generate new L-shaped corner patterns
      const cornerPatterns = [];
      // Use 2 lines for bottom corners to avoid cropping, 3 for top corners
      const isBottomCorner =
        randomCorner === "bottom-left" || randomCorner === "bottom-right";
      const patternCount = isBottomCorner ? 2 : 3;

      for (let i = 0; i < patternCount; i++) {
        const patternType = Math.random();
        let randomPattern;

        if (patternType < 0.5) {
          // Corner brackets
          randomPattern =
            patterns.bracketPatterns[
              Math.floor(Math.random() * patterns.bracketPatterns.length)
            ];
        } else {
          // Plus signs for corners
          randomPattern =
            patterns.plusPatterns[
              Math.floor(Math.random() * patterns.plusPatterns.length)
            ];
        }

        cornerPatterns.push(randomPattern);
      }

      targetCluster.innerHTML = cornerPatterns.join("<br>");

      // Add a subtle highlight effect to show which corner was updated
      targetCluster.style.opacity = "0.7";
      setTimeout(() => {
        targetCluster.style.opacity = "1";
      }, 200);
    }
  }
}

// Function to start ASCII animation
function startASCIIAnimation() {
  // Start the animation immediately
  animateASCIIPatterns();

  // Set up interval to animate every second
  setInterval(animateASCIIPatterns, 1000);
}

// Export functions for use in main HTML file
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createASCIIFrame,
    createASCIIDecorations,
    generateRandomPatterns,
    animateASCIIPatterns,
    startASCIIAnimation,
  };
}
