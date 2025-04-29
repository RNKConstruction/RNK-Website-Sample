// script.js
(() => {
  const imagePathsProjDetails = {
    1: {
      paths: [
        "../images/transient/transient.jpg",
        "../images/transient/transs.jpg",
        "../images/transient/transient.jpg",
        "../images/transient/tran1.jpg",
        "../images/transient/tran2.jpg",
        "../images/transient/tran3.jpg",
      ],
      projectName: "Sungay East, Tagaytay City",
      description:
        "Situated in the peaceful and picturesque Barangay Sungay East, Tagaytay City, this proposed development combines commercial spaces with transient accommodations, covering a total floor area of 768 square meters. Ideally located in a sought-after area known for its refreshing climate and stunning vistas, the property is perfectly designed to cater to both business endeavors and the hospitality needs of guests.",
      specification: "Total floor area: 768 sqm",
    },
    2: {
      paths: [
        "../images/dongregorio/don1.jpg",
        "../images/dongregorio/don5.jpg",
        "../images/dongregorio/don2.jpg",
        "../images/dongregorio/don3.jpg",
        "../images/dongregorio/don4.jpg",
        "../images/dongregorio/don6.jpg",
        "../images/dongregorio/don7.jpg",
      ],
      projectName: "Don Gregorio Heights I, Dasmarinas Cavite",
      description:
        "This bungalow residential house, located in the peaceful and well-developed neighborhood of Don Gregorio Heights I, Subdivision, Dasmariñas, Cavite, showcases a modern architectural design tailored for comfort and practicality. Its single-storey layout blends simplicity with elegance, providing a welcoming and functional living space for its occupants. It ensures a compact yet spacious layout, optimizing the use of space while maintaining a cozy and harmonious atmosphere. The bungalow's modern design emphasizes clean lines, open spaces, and smart layouts to cater to the needs of its occupants. This residence perfectly combines comfort and style, making it an excellent choice for families or individuals seeking a practical and elegant home.",
      specification: "Lot area: 240 sqm, Total floor area: 102 sqm",
    },
    3: {
      paths: [
        "../images/dongregorio/don1.jpg",
        "../images/dongregorio/don5.jpg",
        "../images/dongregorio/don2.jpg",
        "../images/dongregorio/don3.jpg",
        "../images/dongregorio/don4.jpg",
        "../images/dongregorio/don6.jpg",
        "../images/dongregorio/don7.jpg",
      ],
      projectName: "Country Homes 3, Tagaytay City",
      description:
        "The De Guzman Residence is a beautifully planned two-storey residential home located in Guinhawa North Tagaytay City designed to provide both functionality and comfort for its occupants. Located at Blk 7 Lot 7, Country Homes, Tagaytay City, this serene and desirable location is renowned for its cool climate and stunning natural surroundings, making it an ideal environment for a peaceful and relaxed lifestyle. The thoughtful design includes separate levels for social areas and private living quarters, ensuring both functionality and privacy. The modern architectural approach is complemented by a cozy ambiance that blends aesthetics with practicality. The exterior and interior spaces are well-balanced, offering ample room for both indoor living and potential outdoor features, while maintaining an efficient and stylish layout. The De Guzman Residence is a perfect fusion of modern design and cozy living, offering a unique and personalized residential experience in the heart of Tagaytay City's scenic and tranquil setting.",
      specification:
        "TCP: 8,081,495.65 PHP, Lot area: 88 sqm, Total floor area: 65 sqm",
    },
    3: {
      paths: [
        "../images/dguzman/deguzman.jpg",
        "../images/dguzman/deg2.jpg",
        "../images/dguzman/deg7.jpg",
        "../images/dguzman/deg4.jpg",
        "../images/dguzman/deg5.jpg",
        "../images/dguzman/deg6.jpg",
        "../images/dguzman/deg3.jpg",
        "../images/dguzman/deg3.jpg",
        "../images/dguzman/deg9.jpg",
        "../images/dguzman/deg10.jpg",
        "../images/dguzman/deg11.jpg",
        "../images/dguzman/deg12.jpg",
        "../images/dguzman/deg13.jpg",
        "../images/dguzman/deg14.jpg",
      ],
      projectName: "Country Homes 3, Tagaytay City",
      description:
        " The De Guzman Residence is a beautifully planned two-storey residential home located in Guinhawa North Tagaytay City designed to produce comfort for its occupants. Located at Blk 7 Lot 7, Country Homes, Tagaytay City, this serene and desirable location is renowned for its cool climate and stunning natural surroundings, making it an ideal environment for a peaceful and relaxed lifestyle. The thoughtful design includes separate levels for social areas and private living quarters, ensuring both functionality and privacy. The modern architectural approach is complemented by a cozy ambiance that blends aesthetics with practicality. The exterior and interior spaces are well-balanced, offering ample room for both indoor living and potential outdoor features, while maintaining an efficient and stylish layout. The De Guzman Residence is a perfect fusion of modern design and cozy living, offering a unique and personalized residential experience in the heart of Tagaytay City's scenic and tranquil setting.",
      specification:
        "TCP: 8,081,495.65 PHP, Lot area: 88 sqm, Total floor area: 65 sqm",
    },
    4: {
      paths: [
        "../images/tropical/tropical1.jpg",
        "../images/tropical/trop.jpg",
        "../images/tropical/trop1.jpg",
        "../images/tropical/trop2.jpg",
        "../images/tropical/trop3.jpg",
        "../images/tropical/trop4.jpg",
        "../images/tropical/trop5.jpg",
        "../images/tropical/trop6.jpg",
        "../images/tropical/trop7.jpg",
        "../images/tropical/trop8.jpg",
      ],
      projectName: "Tagaytay Tropical Greens, Patutong Malaki, Tagaytay City",
      description:
        "Discover modern living in this sleek, a home nestled in the serene community of Tropical Greens, Patutong Malaki, Tagaytay City. With a lot area of 180 sqm and a total floor area of 175 sqm, this stylish residence offers a near-maximized layout perfect for comfortable family living. The minimalist facade, accented with natural tones and clean lines, reflects a contemporary aesthetic suited for the cool Tagaytay climate. Ideal for those seeking a peaceful retreat just minutes away from the city’s top destinations.",
      specification: "Lot area: 180 sqm, Total floor area: 175 sqm",
    },
    5: {
      paths: [
        "../images/puntafuego/3storey.jpg",
        "../images/puntafuego/punta5.jpg",
        "../images/puntafuego/punta.jpg",
        "../images/puntafuego/punta1.jpg",
        "../images/puntafuego/punta2.jpg",
        "../images/puntafuego/punta3.jpg",
        "../images/puntafuego/punta4.jpg",
        "../images/puntafuego/punta6.jpg",
        "../images/puntafuego/punta7.jpg",
      ],
      projectName: "Punta Fuego : 3 Storey Residential house",
      description:
        "Punta Fuego Nestled in the exclusive coastal community of Peninsula de Punta Fuego, Nasugbu, Batangas, this striking modern three-story residential house is a true statement of elegance and functionality. Sitting on a 400 sqm lot, the home boasts a total floor area of 758.5 sqm, providing ample space for luxurious living and entertaining. The architectural design features bold lines, expansive glass walls, and a dynamic roofline that creates a visually captivating silhouette. Natural elements such as stone cladding, wood accents, and lush tropical landscaping complement the contemporary aesthetic while blending seamlessly with the serene surroundings. Large balconies and full-height windows invite natural light and offer panoramic views, while the sleek facade and thoughtfully designed outdoor spaces highlight a perfect balance between sophistication and comfort. This Punta Fuego residence is an ideal retreat for those seeking an upscale lifestyle in one of Batangas' premier seaside communities.",
      specification: "Lot area: 400 sqm, Total floor area: 225.63 sqm",
    },
    6: {
      paths: [
        "../images/gam/gam2.jpg",
        "../images/gam/gam3.jpg",
        "../images/gam/gam4.jpg",
        "../images/gam/gam5.jpg",
        "../images/gam/gam6.jpg",
        "../images/gam/gam7.jpg",
        "../images/gam/gam8.jpg",
        "../images/gam/gam9.jpg",
        "../images/gam/gam10.jpg",
        "../images/gam/gam11.jpg",
        "../images/gam/gam12.jpg",
        "../images/gam/gam13.jpg",
      ],
      projectName: "Gamaliel Lino Residence",
      description:
        "The Gamaliel Lino Residence is a modern two-storey home located in the serene community of Subdivision Brgy. Malitlit Sta. Rosa City, Laguna. Built on a 180 square meter lot with a total floor area of 220 square meters, this residence offers a perfect blend of style and functionality. The design embraces contemporary architecture, featuring clean lines, large windows, and a mix of textures that give the facade a sleek, elegant appeal. Inside, the house is thoughtfully laid out with four comfortable bedrooms, two toilet and bathrooms, and dual carports ideal for modern family living. This residence not only delivers on aesthetic value but also provides a practical and spacious environment.",
      specification: "Lot area: 180 sqm, Total floor area: 220 sqm",
    },
    7: {
      paths: [
        "../images/gps/gps7.jpg",
        "../images/gps/gps8.jpg",
        "../images/gps/GPS2.jpg",
        "../images/gps/GPS3.jpg",
        "../images/gps/GPS5.jpg",
        "../images/gps/GPS6.jpg",
        "../images/gps/GPS4.jpg",
      ],
      projectName: "GPS Building, Southpoint Laguna",
      description:
        "The renovation project for the GPS Building, located in Southpoint Subdivision, Pulo-Diezmo Road, Cabuyao, Laguna, focuses on upgrading its roof truss to improve both functionality and aesthetics. The roof truss has been meticulously redesigned and renovated with a neat and clean modern design, contributing to the building's overall aesthetic appeal. This enhancement not only updates the structure's appearance but also increases the usability of the building's large interior space. The improved roof design ensures durability, safety, and better accommodation of the building's current and future needs. This renovation demonstrates a strong commitment to practical improvements and modern aesthetics, ensuring the GPS Building remains effective for its occupants while presenting a refined and professional look.",
      specification: "Lot area: 1543 sqm, Total floor area: 1043 sqm",
    },
    8: {
      paths: [
        "../images/cazl/Cazl1.jpg",
        "../images/cazl/Cazl2.jpg",
        "../images/cazl/Cazl3.jpg",
        "../images/cazl/Cazl4.jpg",
        "../images/cazl/Cazl5.jpg",
      ],
      projectName: "CAZL-L Building, Southpoint Laguna",
      description:
        "CAZ-L Building Commercial Located in Southpoint, Sta. Rosa, Laguna, the CAZ-L Building Commercial is a strategically positioned commercial property that blends functionality with accessibility. With a lot area of 1,653.6 square meters and a total floor area of 1,939 square meters, the building offers ample space suitable for a variety of commercial and business ventures. Designed with a central courtyard-like layout and featuring a unique roof structure with a raised central section, the building maximizes natural light and ventilation. The surrounding parking areas and access roads ensure convenience for tenants and customers alike. Its prominent corner location and proximity to major roads make it a highly visible and desirable site for business operations.",
      specification: "Lot area: 1,653.6 sqm, Total floor area: 1,939 sqm",
    },
    9: {
      paths: [
        "../images/martinez-renovation/roof1.jpg",
        "../images/martinez-renovation/roof2.jpg",
        "../images/martinez-renovation/roof3.jpg",
      ],
      projectName: "Martinez Renovation of Roofing System",
      description:
        "This interior ceiling renovation highlights a finely detailed wooden design that enhances both the character and comfort of the space. Featuring an elegant octagonal recessed center, the ceiling is crafted with warm-toned wood panels and bordered with clean, symmetrical molding that draws the eye upward. A ceiling fan is centrally installed, combining functionality with style, while subtle recessed lighting adds a soft, ambient glow to the room. The combination of classic craftsmanship and practical elements creates a refined, inviting atmosphere perfect for residential living or formal spaces.",
      specification: " ",
    },
    10: {
      paths: [
        "../images/palocpoc/palocpoc3.jpg",
        "../images/palocpoc/palocpoc2.jpg",
        "../images/palocpoc/palocpoc5.jpg",
        "../images/palocpoc/palocpoc4.jpg",
        "../images/palocpoc/palocpoc6.jpg",
      ],
      projectName: "Bungalow Renovation and Extension, Palocpoc",
      description:
        "It is fully upgraded bungalow completed by RNK Construction Company. The exterior boasts a refined, modern look with a streamlined gate and polished finish. Inside, the home includes a revamped kitchen, inviting lounge area, and trendy lighting accents. Each space has been carefully curated to blend style with everyday comfort. The result is a refreshed, contemporary home that feels both functional and visually appealing.",
      specification: " ",
    },
    11: {
      paths: [
        "../images/indang-residence/indang2.jpg",
        "../images/indang-residence/indang3.jpg",
        "../images/indang-residence/indang4.jpg",
      ],
      projectName: "2 Storey Residential House: Indang Residence",
      description:
        "A two-storey residential house located in Buna Lejos 2 Purok 7 Indang, Cavite designed for comfortable family living, featuring a modern yet functional layout. The ground floor typically includes common areas such as the living room, kitchen, and dining area, while the second floor houses the bedrooms and a shared bathroom. Large windows provide natural lighting, and a balcony or terrace may be included on the upper level. The exterior is built with durable materials and complemented by a small front yard or garden area, making it ideal for suburban or semi-rural settings.",
      specification: "Lot area: 39.54 sqm, Total floor area: 47 sqm",
    },
    12: {
      paths: [
        "../images/blackdrip/blackdrip2.jpg",
        "../images/blackdrip/blackdrip3.jpg",
        "../images/blackdrip/blackdrip4.jpg",
        "../images/blackdrip/blackdrip5.jpg",
      ],
      projectName: "Blackdrip Coffee Shop",
      description:
        'The Black Drip Coffee Shop is a modern café designed to deliver a warm, sophisticated atmosphere for coffee lovers. Located at Unit A, Freva Building II, Mahogany Avenue, Kaybagal South, Tagaytay City. With a total floor area of 47 sq. m, the layout is meticulously planned to ensure both intimacy and comfort. The interior design emphasizes a modern aesthetic, incorporating clean lines, minimalist decor, and a carefully chosen color scheme. The palette blends neutral tones with bold, dark accents that reflect the café\'s "black drip" identity, creating an elegant yet approachable ambiance. This atmosphere makes it ideal for casual meetups, productive work sessions, or simple moments of relaxation. The Black Drip Coffee Shop aspires to be a go-to destination for coffee aficionados and casual visitors alike, combining excellent coffee, a relaxing atmosphere, and exceptional design to create a unique café experience. Every detail is thoughtfully considered to ensure the space is both visually appealing and practical for daily operations.',
      specification: "TCP: 650,000 PHP, Total floor area: 47 sqm",
    },
    13: {
      paths: [
        "../images/riprap/brgy1.jpg",
        "../images/riprap/brgy2.jpg",
        "../images/riprap/brgy3.jpg",
        "../images/riprap/brgy4.jpg",
      ],
      projectName: "Brgy. Patutong Malaki, RIPRAP Project",
      description:
        "The riprap was constructed by a RNK Construction Company to stabilize and protect the drainage canal alongside the road. It consists of tightly packed stones and concrete elements, designed to prevent soil erosion and support the structure of the canal. Moss and vegetation have started to grow over parts of the riprap, showing it's been in place for some time. The structure appears solid and functional, effectively reinforcing the embankment in this lush, rural area.",
      specification: " ",
    },
    14: {
      paths: ["../images/warehouse/warehouse2.jpg"],
      projectName: "Warehouse: Asis, Mendez",
      description:
        "A Warehouse used on a construction site for storing building materials, tools, and equipment. It features a durable steel frame with metal or tarpaulin roofing and wall panels, designed to withstand heavy use and varying weather conditions. The interior is open and spacious, allowing for easy organization of supplies such as cement, steel bars, lumber, and construction machinery. Roll-up doors or wide openings provide convenient access for loading and unloading. The warehouse helps ensure materials are secure, accessible, and protected throughout the duration of the project.",
      specification: " ",
    },
    15: {
      paths: [
        "../images/kyrie/ky0.jpg",
        "../images/kyrie/ky1.jpg",
        "../images/kyrie/ky2.jpg",
        "../images/kyrie/ky3.jpg",
        "../images/kyrie/ky4.jpg",
        "../images/kyrie/ky5.jpg",
        "../images/kyrie/ky6.jpg",
      ],
      projectName: "Kyrie's House",
      description:
        "Kyrie’s house is secured with a tall, gray metal gate that features vertical bars at the top for visibility and solid panels below for privacy. A white pillar divides the gate into sections, adding structural support. The property is surrounded by lush greenery, including large trees that provide shade and a touch of nature. the roof of the house peeks through, with blue skies and fluffy clouds overhead, giving the place a peaceful and serene atmosphere.",
      specification: " ",
    },
    16: {
      paths: [
        "../images/metropolis/metropolis1.jpg",
        "../images/metropolis/metropolis2.jpg",
        "../images/metropolis/metropolis3.jpg",
      ],
      projectName: "Metropolis Residence",
      description:
        "This modern residential building combines contemporary design, functionality, and comfort—ideal for families, staff housing, or investment. Built with reinforced concrete, it features a minimalist façade, flat roof, and private entrances for each unit. Spacious ground-floor layouts offer natural light and garden views, while upper units enjoy a shared balcony with planters. Surrounded by landscaped greenery and an open lawn, it provides a peaceful setting close to schools, shops, and public amenities—perfect for modern multi-family living or rental use.",
      specification: " ",
    },
    17: {
      paths: [
        "../images/mendoza-residence/mendoza1.png",
        "../images/mendoza-residence/mendoza2.png",
        "../images/mendoza-residence/mendoza3.png",
        "../images/mendoza-residence/mendoza4.png",
        "../images/mendoza-residence/mendoza5.png",
        "../images/mendoza-residence/mendoza6.png",
        "../images/mendoza-residence/mendoza7.png",
      ],
      projectName: "Proposed Bungalow House: Mendoza Residence",
      description:
        "This image showcases a modern tropical house design featuring clean lines, a mix of wood and concrete textures, and large glass windows. The home has a stylish wooden pergola over the entrance, lush landscaping, and a cozy patio. In the foreground, there's a small pool with water fountains, lounge chairs, and an umbrella, creating a perfect outdoor relaxation space. The overall aesthetic combines nature and modern comfort, emphasizing open-air living and leisure.",
      specification: " ",
    },
    18: {
      paths: [
        "../images/metrogate/metrogate1.jpg",
        "../images/metrogate/metrogate2.jpg",
        "../images/metrogate/metrogate3.jpg",
        "../images/metrogate/metrogate4.jpg",
        "../images/metrogate/metrogate0.jpg",
        "../images/metrogate/metrogate6.jpg",
      ],
      projectName: "Tecson Project: Metrogate",
      description:
        "This modern kitchen showcases a clean, minimalist design with white cabinetry, elegant marble countertops and backsplash, and soft under-cabinet lighting that adds warmth. A large window invites natural light and outdoor views, while glass sliding doors open to a secondary kitchen area, maintaining a seamless and functional layout. The overall space feels bright, organized, and inviting—perfect for both everyday use and entertaining.",
      specification: " ",
    },
  };

  // const imageColumn = document.getElementById("imageColumn");
  // const projectNameElement = document.getElementById("projectName");
  // const projectdescElement = document.getElementById("projectDesc");
  // const projectspecificationElement = document.getElementById(
  //   "projectSpecification"
  // );

  // function generateColumnImages(project) {
  //   imageColumn.innerHTML = ""; // Clear existing images
  //   project.paths.forEach((path) => {
  //     const newImage = document.createElement("img");
  //     newImage.src = path;
  //     newImage.alt = "Project Image";
  //     imageColumn.appendChild(newImage);
  //   });
  //   projectNameElement.textContent = project.projectName; //Update Name
  //   projectdescElement.textContent = project.description; // Update description

  //   projectspecificationElement.textContent = project.specification; // Update Specification
  // }

  // function getSelectedProject() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   return urlParams.get("project") || "1"; // Default to group 1
  // }

  // function generateImagesDesc() {
  //   const selectedGroup = getSelectedProject();
  //   const project =
  //     imagePathsProjDetails[selectedGroup] || imagePathsProjDetails[1]; // Fallback to group 1
  //   generateColumnImages(project);
  // }

  // // Call the function to generate images on page load
  // generateImagesDesc();

  document.addEventListener("DOMContentLoaded", function () {
    const imageColumn = document.getElementById("imageColumn");
    const projectNameElement = document.getElementById("projectName");
    const projectdescElement = document.getElementById("projectDesc");
    const projectspecificationElement = document.getElementById(
      "projectSpecification"
    );

    function generateColumnImages(project) {
      if (imageColumn) {
        imageColumn.innerHTML = ""; // Clear existing images
        project.paths.forEach((path) => {
          const newImage = document.createElement("img");
          newImage.src = path;
          newImage.alt = "Project Image";
          imageColumn.appendChild(newImage);
        });
        projectNameElement.textContent = project.projectName; //Update Name
        projectdescElement.textContent = project.description; // Update description
        projectspecificationElement.textContent = project.specification; // Update Specification
      } else {
        console.error(
          "Error: Element with ID 'imageColumn' not found in HTML."
        );
      }
    }

    function getSelectedProject() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("project") || "1"; // Default to group 1
    }

    function generateImagesDesc() {
      const selectedGroup = getSelectedProject();
      const project =
        imagePathsProjDetails[selectedGroup] || imagePathsProjDetails[1]; // Fallback to group 1
      generateColumnImages(project);
    }

    // Call the function to generate images on page load
    generateImagesDesc();
  });
})();
