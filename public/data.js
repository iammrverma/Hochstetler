export const floorPlans = [
  //to be used to render title and the image therefore image name under floorPlansImages and floorMaps should be exactly the title where " " -> "_" with .jpg extention
  {
    title: "acadia log home",
    area: "1864",
    bedrooms: "3",
    bathrooms: "2",
    about:
      "The Acadia home is designed to offer outstanding practicality and convenience. It features the ever popular open-concept great room with exposed timbers in the cathedral ceiling and a 2-story stone chimney. The kitchen has a serving island and easy access to the sunroom and nearby laundry room. The master bedroom has a large master bath with double sink and spacious closets. Upstairs, there is a second bedroom, full bath, office and loft. The loft, with its angled floor configuration, offers an outstanding view of the great room and fireplace below. If you need a 2-3 bedroom home with an outstanding traffic flow and convenience check this one out.",
    suggestions: ["black fork log home"],
  },
  {
    title: "black fork log home",
    area: "1095",
    bedrooms: "1",
    bathrooms: "1",
    about:
      "The Black Fork is the perfect getaway for the weekend or vacation. The extensive glass entry offers an unobstructed view of the lake or landscape - either from inside or outside on the covered front porch. This very affordable cabin also features the popular open-concept great room with exposed timbers and fireplace, first-floor laundry area, convenient mud room, bath and generous size loft. For an upfront and personal view, come visit this model.",
    suggestions: [
      "clear fork log home",
      "acadia log home",
      "eagle point log home",
    ],
  },
  {
    title: "clear fork log home",
    area: "2975",
    bedrooms: "3",
    bathrooms: "3",
    about:
      "The Clear Fork can be described in one word- majestic! Whether it overlooks a lake or river or expansive valley, this home offers a commanding and unobstructed view. Inside, it features the spacious, open-concept great room with exposed timber ceiling and impressive fireplace, chef-size kitchen with built-in pantry and convenient island, first-floor walk-through laundry and master bedroom with walk-in closet and master bath. Upstairs, there are two additional bedrooms and a bath, plus an open loft which overlooks the great room and front entry.\nYour family will love the step-saving convenience and breathtaking beauty of this home as much as your guests. It is truly a home you'll be proud of and one that will be the focus of memories for years to come.",
    suggestions: [
      "eagle point log home",
      "acadia log home",
      "black fork log home",
    ],
  },
  {
    title: "eagle point log home",
    area: "1871",
    bedrooms: "3",
    bathrooms: "2.5",
    about:
      "Eagle Point is a beautifully designed home with all the amenities in a smaller footprint. The large glass windows in the angled prow brings in the outdoors and captures the view from the great-room. Master suite is on the main-floor with a double sink in the bathroom and a large walk-in closet. Upstairs are two additional bedrooms and full bath. Laundry is in the mudroom, leading to the 2-car garage. Live a life more simple, build the Eagle Point. Optional basement adds 804 sq. ft., 2 bd, 1 ba, a recreation area, and space for storage.",
    suggestions: ["green tento log home"],
  },
  {
    title: "green tento log home",
    area: "3440",
    bedrooms: "3",
    bathrooms: "2.5",
    about:
      "The Grand Teton resonates the classic craftsman’s architectural style. An attractive characteristic that comes natural with a log home. With its full-length front porch, massive exposed beams in the great room, the home is a testament to a classic, secure and comfortable lifestyle. It features a large, first floor master suite with a large walk-in closet and its own private porch.\nThe chef size kitchen is truly the heart of this majestic home. Upstairs, the loft offers a grand view of the great room with large, stone fireplace and the spacious entry. Two additional bedrooms each with their own bath and plenty of closet space provide room for guests. The oversized garage provides ample room for a workbench and lawn equipment.",
    suggestions: [
      "eagle point log home",
      "acadia log home",
      "black fork log home",
    ],
  },
  {
    title: "lake view log home",
    area: "3182",
    bedrooms: "3",
    bathrooms: "2",
    about:
      "From curb appeal to jaw dropping interior the Lake View has it. As you enter the foyer area your eyes will be drawn to the huge timbers that soar above the cathedral greatroom along with the massive stone fireplace. To your right is the chef style kitchen that offers plenty of room to cook your favorite dinner. It features a large, first floor master bedroom with master bath and a large walk-in closet. Two additional bedrooms, a bath and a loft area are located upstairs. Pantry, office, 1/2 bath, mudroom and laundry are in the breezeway which leads to the 2-car garage. Let this be your next home!",
    suggestions: [
      "eagle point log home",
      "acadia log home",
      "black fork log home",
    ],
  },
  {
    title: "laurel ridge log home",
    area: "209",
    bedrooms: "3",
    bathrooms: "2.5",
    about:
      "The Laurel Ridge is for those seeking the traditional cape-cod style front but wanting expansive glass in the great-room to capture the view. The Master Bedroom and Bath with a large walk-in closet are located on the main floor. Two additional bedrooms, a bath and a loft area are located upstairs. Laundry is in the breezeway which leads to the 2-car garage. Regardless of your setting, the Laurel Ridge will fit.",
    suggestions: [
      "eagle point log home",
      "acadia log home",
      "black fork log home",
    ],
  },
  {
    title: "lexinton log home",
    area: "2652",
    bedrooms: "4",
    bathrooms: "3",
    about:
      "The Lexington captures the traditional look of the log home outside with its soaring chimney flanked by the two dormers and timber framed porches, but is anything but traditional on the inside. Designed for today's lifestyle, it offers a nice-sized master bedroom with adjoining walk-in closet and master bath, first-floor laundry/mudroom, plus a second bedroom or office, all on the first floor. The spacious great room features a cathedral ceiling with large timber rafters and inviting stone fireplace.Upstairs, there are two more bedrooms (one with a walk- closet), a full bath, loft, and bonus room with plenty of room for the kids' toys, dad's trophies or mom's sewing creations.",
    suggestions: [
      "eagle point log home",
      "acadia log home",
      "black fork log home",
    ],
  },
];

export const projects = [
  {
    title: "Arni Log Home",
    location: "ohio",
  },
  {
    title: "Convingont Log Home",
    location: "Tennessee",
  },
  {
    title: "Lysons Log Home",
    location: "ohio",
  },
  {
    title: "Cargo Log Home",
    location: "montana",
  },
  {
    title: "Young Log Home",
    location: "ohio",
  },
  {
    title: "Bell Log Home",
    location: "ohio",
  },
];

// we will follow tha same convention, you will find public/blogs where each image name should be same as the blog title replacing " " with "_" and . extention at the end. For adding additinal blogs add an image in the blogs folder with name same as title " " -> "_" and add another object in this const blogs = [] array make sure to keep the title and image name according to mentioned convention.

// content is divided into sections where each section could have heading and multiple paras, according to the site design author name will be placed between heading and paras of first section.
export const blogs = [
  {
    title: "tips for lighting your log home", // keep it small case
    description:
      "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency.",
    read: "6",
    author: "By Steve Lykins, Architect/Engineer at Hochstetler Log Homes",
    sections: [
      {
        heading:
          "Thoughtful lighting design is essential in a log home, where wood surfaces absorb more light than traditional drywall. Planning ahead ensures your home feels warm, inviting, and well-lit for every occasion.",
        paras: [
          "Light is one of the most important tools for architectural design. Light is what allows us to experience our world and our surroundings through our sense of sight. It can be said that the human experience is partially defined by light. So make no mistake: light is very important! Often, lighting and electrical design are an afterthought during the design of any home. With log homes in particular, lighting is especially important because the walls and ceilings typically have a natural wood finish, which is unique and beautiful, but does not reflect light like a relatively smooth painted drywall or plaster surface. Think about lighting the interior of the home as well as the exterior. Think about how lights inside the home will look from outside at night. With a log home, it can be especially difficult to change lighting design after construction has started, so start planning early!",
          "There are four basic functions of lighting to consider in the design of a log home: general lighting, special task lighting, architectural lighting, and security lighting. Look at every room and space in the home and decide how each of these functions will be met. How will you see in order to walk through the room safely? If it is a kitchen, how will you light the work surfaces? Do you want to accent the beautiful heavy timber roof system with some directional lights? How will you know when someone approaches your home from the drive or street?",
        ],
      },
      {
        heading: "Balancing Natural and Artificial Light",
        paras: [
          "The next step is to consider what types of light you want to introduce. There are two basic types of light: natural light and artificial light. Building codes govern both natural and artificial lighting and the amount of light required for any given room or space. Often, your most basic lighting needs will satisfy building code requirements, but you might choose to work with your designer and/or electrician to be sure that you meet these requirements. The placement of windows, doors, and perhaps skylights during the design of your home will ultimately impact the amount of artificial lighting required. Think about how you will orient the home on the site to take advantage of the rising and setting of the sun during different seasons. Consider providing shades or awnings for large spans of glass so they don’t gain too much heat during summer. Be sure to include generous amounts of glass (whether windows or doors) in the spaces where you spend the most time. Many times, the great room, kitchen, and dining room are the most frequently used. Some folks also spend a lot of time in their bedroom and/or bathroom. Perhaps your workshop in the garage or your hobby room in the basement is where you spend most of your time? Natural light is said to improve human emotion, and some experiments have supported this claim. Ensure that you will enjoy the time you spend in these spaces by adding natural light!",
          "You must also use some artificial light because natural light is not always available when and where you want it. While there are many types of artificial light, a few are well suited for log homes. Track lights are a good choice for log homes, as they can be installed from a single point but directed in almost any direction. This is a great way to achieve architectural lighting for a big stone fireplace, heavy timber ceiling, or custom woodwork in the home. Wall-mounted fixtures (or sconces) are also a great choice for log home lighting, as they can be installed easily on interior walls and create an intimate ambiance. Chandeliers can be a great design feature for a great room or dining room. Pendant lights are common for kitchen islands, while fluorescent strip lights are suitable for workshops and garages. Vanity strip lights are ideal for bathrooms, and ceiling-mounted lights serve various applications. Recessed lights or ‘can’ lights offer a sleek, contemporary feel but are difficult to install in heavy timber floors/ceilings. If you want recessed lighting in your log home, consult your designer or electrician early in the design process.",
        ],
      },
      {
        heading: "Choosing the Right Light Sources",
        paras: [
          "There are several types of lamps (‘bulbs’) available for most of the fixture types listed above. Incandescent lamps have been around for over 100 years and produce a warm, amber-colored light. These lamps enhance the warm and cozy feeling of a log home; however, many building codes require energy-efficient lamps that traditional incandescent bulbs do not meet. Consult with your designer or electrician. Fluorescent lamps, especially compact fluorescent lamps (CFLs), are gaining popularity due to their efficiency, but they emit a notoriously ‘blue’ light. Some manufacturers now produce warm-colored CFLs, and lenses are available for fixtures to adjust light color. LEDs are another option—while initially expensive, they offer unparalleled efficiency and now come in various color temperatures. Given today’s LED prices, they often pay for themselves within 5–10 years.",
          "Lighting control is another important consideration. Dimmer switches allow you to adjust light levels, changing the mood of a room while also improving efficiency. However, many CFLs are not dimmable, so choose bulbs accordingly. Motion switches turn lights on when someone enters a room, while photo switches can automatically turn lights on at night and off during the day. Timers provide scheduled lighting control. These features not only enhance convenience but also help save on electricity costs.",
          "Again, light is one of the most powerful architectural design tools available, so consider it early in the design process. Think about how it will allow you, your family, and your guests to enjoy the natural beauty of your log home while enhancing its design. Lighting is not just about visibility—it shapes your experience within your home!",
        ],
      },
    ],
  },

  {
    title: "tips for lighting your log home", // keep it small case
    description:
      "Lighting plays a crucial role in showcasing the warmth and character of a log home. From natural light to well-placed fixtures, here’s how to create the perfect ambiance while enhancing function and efficiency.",
    read: "6",
    author: "By Steve Lykins, Architect/Engineer at Hochstetler Log Homes",
    sections: [
      {
        heading:
          "Thoughtful lighting design is essential in a log home, where wood surfaces absorb more light than traditional drywall. Planning ahead ensures your home feels warm, inviting, and well-lit for every occasion.",
        paras: [
          "Light is one of the most important tools for architectural design. Light is what allows us to experience our world and our surroundings through our sense of sight. It can be said that the human experience is partially defined by light. So make no mistake: light is very important! Often, lighting and electrical design are an afterthought during the design of any home. With log homes in particular, lighting is especially important because the walls and ceilings typically have a natural wood finish, which is unique and beautiful, but does not reflect light like a relatively smooth painted drywall or plaster surface. Think about lighting the interior of the home as well as the exterior. Think about how lights inside the home will look from outside at night. With a log home, it can be especially difficult to change lighting design after construction has started, so start planning early!",
          "There are four basic functions of lighting to consider in the design of a log home: general lighting, special task lighting, architectural lighting, and security lighting. Look at every room and space in the home and decide how each of these functions will be met. How will you see in order to walk through the room safely? If it is a kitchen, how will you light the work surfaces? Do you want to accent the beautiful heavy timber roof system with some directional lights? How will you know when someone approaches your home from the drive or street?",
        ],
      },
      {
        heading: "Balancing Natural and Artificial Light",
        paras: [
          "The next step is to consider what types of light you want to introduce. There are two basic types of light: natural light and artificial light. Building codes govern both natural and artificial lighting and the amount of light required for any given room or space. Often, your most basic lighting needs will satisfy building code requirements, but you might choose to work with your designer and/or electrician to be sure that you meet these requirements. The placement of windows, doors, and perhaps skylights during the design of your home will ultimately impact the amount of artificial lighting required. Think about how you will orient the home on the site to take advantage of the rising and setting of the sun during different seasons. Consider providing shades or awnings for large spans of glass so they don’t gain too much heat during summer. Be sure to include generous amounts of glass (whether windows or doors) in the spaces where you spend the most time. Many times, the great room, kitchen, and dining room are the most frequently used. Some folks also spend a lot of time in their bedroom and/or bathroom. Perhaps your workshop in the garage or your hobby room in the basement is where you spend most of your time? Natural light is said to improve human emotion, and some experiments have supported this claim. Ensure that you will enjoy the time you spend in these spaces by adding natural light!",
          "You must also use some artificial light because natural light is not always available when and where you want it. While there are many types of artificial light, a few are well suited for log homes. Track lights are a good choice for log homes, as they can be installed from a single point but directed in almost any direction. This is a great way to achieve architectural lighting for a big stone fireplace, heavy timber ceiling, or custom woodwork in the home. Wall-mounted fixtures (or sconces) are also a great choice for log home lighting, as they can be installed easily on interior walls and create an intimate ambiance. Chandeliers can be a great design feature for a great room or dining room. Pendant lights are common for kitchen islands, while fluorescent strip lights are suitable for workshops and garages. Vanity strip lights are ideal for bathrooms, and ceiling-mounted lights serve various applications. Recessed lights or ‘can’ lights offer a sleek, contemporary feel but are difficult to install in heavy timber floors/ceilings. If you want recessed lighting in your log home, consult your designer or electrician early in the design process.",
        ],
      },
      {
        heading: "Choosing the Right Light Sources",
        paras: [
          "There are several types of lamps (‘bulbs’) available for most of the fixture types listed above. Incandescent lamps have been around for over 100 years and produce a warm, amber-colored light. These lamps enhance the warm and cozy feeling of a log home; however, many building codes require energy-efficient lamps that traditional incandescent bulbs do not meet. Consult with your designer or electrician. Fluorescent lamps, especially compact fluorescent lamps (CFLs), are gaining popularity due to their efficiency, but they emit a notoriously ‘blue’ light. Some manufacturers now produce warm-colored CFLs, and lenses are available for fixtures to adjust light color. LEDs are another option—while initially expensive, they offer unparalleled efficiency and now come in various color temperatures. Given today’s LED prices, they often pay for themselves within 5–10 years.",
          "Lighting control is another important consideration. Dimmer switches allow you to adjust light levels, changing the mood of a room while also improving efficiency. However, many CFLs are not dimmable, so choose bulbs accordingly. Motion switches turn lights on when someone enters a room, while photo switches can automatically turn lights on at night and off during the day. Timers provide scheduled lighting control. These features not only enhance convenience but also help save on electricity costs.",
          "Again, light is one of the most powerful architectural design tools available, so consider it early in the design process. Think about how it will allow you, your family, and your guests to enjoy the natural beauty of your log home while enhancing its design. Lighting is not just about visibility—it shapes your experience within your home!",
        ],
      },
    ],
  },
  {
    title: "log home interior design ideas", // keep it small case
    description:
      "Choosing interior finishes for your log home should be exciting, not overwhelming. With a plan in place, you can create a space that feels both timeless and uniquely yours.",
    read: "2",
    author: "By Jara Thomas Proprietor of JT Interiors",
    sections: [
      {
        heading:
          "With your log home plans finalized, it’s time to dive into interior selections—from cabinets to countertops, flooring to finishes. Here’s how to approach the process with confidence and clarity.",
        paras: [
          "Building the log home of your dreams? Your building plans are finalized and now it’s time to start selecting your interior elements and finishes! Where do you start? So many decisions to be made: painted or stained cabinets, wood or tile flooring, granite or quartz countertops? With so many options available it’s easy to get overwhelmed. First, take a deep breath and remember this can be a fun and exciting process. You just need a plan!",
          "As a general rule of thumb, I prefer to start with the heart of the home, the kitchen.  Start with your kitchen cabinets. There are 2 basic styles of doors to choose from with variations on edging profiles. The first style is a raised panel option (traditional) and the second style is a recessed flat panel (shaker).  Next it’s time to determine if your cabinets will be stained, painted, or perhaps a combination of the two. You can add a pop of color on the kitchen island while keeping the wall cabinets stained or a neutral paint color",
          "Once the style and finishes of your kitchen cabinets have been made, it’s time to move on to your flooring and countertop options. When considering your flooring options (wood, tile, L.V.T), do your research and determine which type of flooring suites your budget and lifestyle. Also keep in mind that if you’re doing a tile floor that has a lot of variation and movement consider choosing a countertop material that won’t compete pattern wise. Or vice versa, if selecting a wood floor, consider choosing a countertop material that does have some variation or “movement”.",
          "With some of these main design choices made (cabinets, flooring, countertops) other materials and finishes, such as backsplash tile, wall color, and cabinet hardware options will start to fall into place. However, if your selections aren’t coming together like you thought they would and your questioning some of your design choices, consider hiring an interior designer to assist you. That’s what we’re here for!",
        ],
      },
    ],
  },
  {
    title: "log home interior design ideas", // keep it small case
    description:
      "Choosing interior finishes for your log home should be exciting, not overwhelming. With a plan in place, you can create a space that feels both timeless and uniquely yours.",
    read: "2",
    author: "By Jara Thomas Proprietor of JT Interiors",
    sections: [
      {
        heading:
          "With your log home plans finalized, it’s time to dive into interior selections—from cabinets to countertops, flooring to finishes. Here’s how to approach the process with confidence and clarity.",
        paras: [
          "Building the log home of your dreams? Your building plans are finalized and now it’s time to start selecting your interior elements and finishes! Where do you start? So many decisions to be made: painted or stained cabinets, wood or tile flooring, granite or quartz countertops? With so many options available it’s easy to get overwhelmed. First, take a deep breath and remember this can be a fun and exciting process. You just need a plan!",
          "As a general rule of thumb, I prefer to start with the heart of the home, the kitchen.  Start with your kitchen cabinets. There are 2 basic styles of doors to choose from with variations on edging profiles. The first style is a raised panel option (traditional) and the second style is a recessed flat panel (shaker).  Next it’s time to determine if your cabinets will be stained, painted, or perhaps a combination of the two. You can add a pop of color on the kitchen island while keeping the wall cabinets stained or a neutral paint color",
          "Once the style and finishes of your kitchen cabinets have been made, it’s time to move on to your flooring and countertop options. When considering your flooring options (wood, tile, L.V.T), do your research and determine which type of flooring suites your budget and lifestyle. Also keep in mind that if you’re doing a tile floor that has a lot of variation and movement consider choosing a countertop material that won’t compete pattern wise. Or vice versa, if selecting a wood floor, consider choosing a countertop material that does have some variation or “movement”.",
          "With some of these main design choices made (cabinets, flooring, countertops) other materials and finishes, such as backsplash tile, wall color, and cabinet hardware options will start to fall into place. However, if your selections aren’t coming together like you thought they would and your questioning some of your design choices, consider hiring an interior designer to assist you. That’s what we’re here for!",
        ],
      },
    ],
  },
];
