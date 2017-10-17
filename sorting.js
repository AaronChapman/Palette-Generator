//oylo's palette generator - oylo.info
//latest update - 17 october 2017

//backtick for javascript strings that need variables inside them: `




//colors_to_generate   0 - all      1 - cool      2 - warm
//colors_to_alter      0 - reg      1 - dark      2 - pastel
var colors_to_generate = 1;
var colors_to_alter = 2;

//these are pretty self-explanatory
var pixels_to_generate = self.innerHeight / 15;
var pixels_generated = 0;
var speed = 1500;

var loop = true;

var temp_id = "";
var to_copy = "";

var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var last_palette = [];
var ids = [];




//general utility function
function random_int(min, max) { return Math.random() * (max - min) + min; }




//sets overload/underload messages
function max_message(id, message) {
    document.getElementById("message").innerHTML = message;
    document.getElementById("message").style.color = '#dc7668';
    document.getElementById("message").style.opacity = 1;
}




//load pixels, and begin to randomize
function generate_pixels() {
    while (pixels_generated < pixels_to_generate) {
        temp_id = pixels_generated.toString();

        generate_pixel(random_hex());

        pixels_generated = pixels_generated + 1;
    }
    
    //store info for last palette function
    store_palette_info();
    
    //safety check
    if (loop) {
        setTimeout(function() {
            if (loop) {
                randomize_pixels();
            }
        }, speed);
    }
}




//generates individual pixels
function generate_pixel(hex_color) {
    var pixel = document.createElement("div");

    pixel.style.width = 'auto';
    pixel.style.height = 'auto';
    pixel.style.padding = '10px';
    pixel.style.background = hex_color;
    pixel.style.paddingLeft = '40px';
    pixel.style.color = '#F5F5F5';
    pixel.style.textShadow = '1px 1px black';
    pixel.style.fontSize = '12px';
    pixel.style.cursor = 'pointer';
    pixel.className = 'hex_div';
    pixel.id = temp_id;
    pixel.innerHTML = hex_color.toLowerCase();
    pixel.setAttribute('onclick',`select_hex(${pixel.id})`);

    ids.push(temp_id);

    document.getElementById("palette").appendChild(pixel);
}




//user clicks hexidecimal div
function select_hex(div_id) {
    var selected_hex = document.getElementById(div_id).innerHTML;
    
    document.getElementById("selected_hex_color").style.background = selected_hex;
    document.getElementById("copy_area").value = selected_hex;
}

 


//generates a random hexidecimal value
function random_hex() {
    //hex base
    var temp_hex = "#";

    //color generation selection
    switch (colors_to_generate) {
        //regular colors
        case 0:
            for (i = 0; i < 6; i++) {
                var random_index = Math.floor(Math.random() * characters.length);

                //darker
                if (colors_to_alter == 1) {
                    while (random_index > 4) {
                        random_index = Math.floor(Math.random() * characters.length);
                    }
                //pastel
                } else if (colors_to_alter == 2) {
                    while (random_index < 10) {
                        random_index = Math.floor(Math.random() * characters.length);
                    }
                }

                temp_hex = temp_hex.concat(characters[random_index]);
            }

            break;
        //cool colors
        case 1:
            for (i = 0; i < 6; i++) {
                var random_index = Math.floor(Math.random() * characters.length);

                //regular
                if (colors_to_alter == 0) {
                    if (i < 2) {
                        while (random_index > 5) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index < 4 || random_index > 8) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index < 5 || random_index > 9) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                //darker
                } else if (colors_to_alter == 1) {
                    if (i < 2) {
                        while (random_index > 3) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index > 4) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index < 4 || random_index > 8) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                //pastel
                } else if (colors_to_alter == 2) {
                    if (i < 2) {
                        while (random_index < 4 || random_index > 7) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index < 8 || random_index > 11) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index < 10) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                }

                temp_hex = temp_hex.concat(characters[random_index]);
            }

            break;
        //warm colors
        case 2:
            for (i = 0; i < 6; i++) {
                var random_index = Math.floor(Math.random() * characters.length);

                //regular
                if (colors_to_alter == 0) {
                    if (i < 2) {
                        while (random_index < 5) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index > 7) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index > 7) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                //darker
                } else if (colors_to_alter == 1) {
                    if (i < 2) {
                        while (random_index < 4 || random_index > 7) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index > 3) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index > 3) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                //pastel
                } else if (colors_to_alter == 2) {
                    if (i < 2) {
                        while (random_index < 9) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else if (i == 2 || i == 3) {
                        while (random_index < 8 || random_index > 10) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    } else {
                        while (random_index < 8 || random_index > 10) {
                            random_index = Math.floor(Math.random() * characters.length);
                        }
                    }
                }

                temp_hex = temp_hex.concat(characters[random_index]);
            }

            break;
    }

    return temp_hex;
}




//randomize pixels
function randomize_pixels() {
    var safety = 0;
    var temp_ids = [];

    while (safety < pixels_to_generate) {
        var random_id = Math.floor(Math.random() * ids.length);

        //if id generated has already been changed this cycle, ignore
        if (jQuery.inArray(random_id, temp_ids) !== -1) {
            console.log("everything's gucci, mane");
        } else {
            temp_ids.push(random_id);

            //set chosen element to new hex
            var new_hex = random_hex();
            
            document.getElementById(random_id).style.background = new_hex;
            document.getElementById(random_id).innerHTML = new_hex.toLowerCase();

            safety = safety + 1;
        }
    }
    
    safety = 0;
    temp_ids = [];
    

    //safety check
    if (loop) {
        setTimeout(function() {
            if (loop) {
                store_palette_info();
                randomize_pixels();
            }
        }, speed);
    }
}




//replace active pixels based on current option states
function remove_pixels() {
    pixels_generated = 0;
    loop = false;
    temp_id = "";
    ids = [];
    
    $(".palette").empty();
    
    var palette_size = document.getElementById("size_of_palette").value;
    var parsed_palette_size = parseInt(palette_size);
    
    if (parsed_palette_size > 50) {
        pixels_to_generate = 50;
        max_message("size_of_palette", "palettes can be no larger than 50 colors");
    } else if (parsed_palette_size < 1 || isNaN(parsed_palette_size)) {
        pixels_to_generate = 1;
        max_message("size_of_palette", "palettes must consist of at least 1 color");
    } else {
        pixels_to_generate = parsed_palette_size;
        
        setTimeout(function() {
            var palette_size_check = document.getElementById("size_of_palette").value;
            var parsed_palette_size_check = parseInt(palette_size_check);
            
            if (parsed_palette_size_check <= 50 && parsed_palette_size_check >= 1) {
                document.getElementById("message").style.opacity = 0;
            }
        }, 100);
    }
    
    generate_pixels();
    set_selected_options();
}




//change speed of generation loop 
function change_speed() {
    speed = document.getElementById("speed_of_loop").value * 1000;

    if (speed > 30000) {
        speed = 30000;
        max_message("speed_of_loop", "loop cannot exceed 30 seconds");
    } else if (speed < 1000) {
        speed = 1000;
        max_message("speed_of_loop", "cannot loop in less than 1 second");
    } else {
        setTimeout(function() {
            document.getElementById("message").style.opacity = 0;
        }, 100);
    }
}




//stores new palette info for 'last' function
function store_palette_info() {
    last_palette = [];
    
    document.getElementById("last").style.opacity = 1;
    
    for (i = 0; i < pixels_to_generate; i++) {
        last_palette.push(document.getElementById(i.toString()).innerHTML);
    }
}

//retrieves info from previously displayed palette
function retrieve_palette_info() {
    stop_loop();
    
    for (i = 0; i < pixels_to_generate; i++) {
        document.getElementById(i.toString()).style.background = last_palette[i];
        document.getElementById(i.toString()).innerHTML = last_palette[i];
    }
    
    document.getElementById("last").style.opacity = 0.25;
}




//setting variables that determine hexidecimal generation
function select_all_colors() {
    colors_to_generate = 0;
    
    set_selected_options();
}

function select_cool_colors() { 
    colors_to_generate = 1; 
    
    set_selected_options();
}

function select_warm_colors() { 
    colors_to_generate = 2; 
    
    set_selected_options();
}

function select_regular_colors() { 
    colors_to_alter = 0; 
    
    set_selected_options();
}

function select_dark_colors() { 
    colors_to_alter = 1;
    
    set_selected_options();
}

function select_pastel_colors() { 
    colors_to_alter = 2;
    
    set_selected_options();
}




//set options to be properly selected
function set_selected_options() {
    if (!loop) { 
        randomize_pixels();
        
        document.getElementById("start").style.opacity = 1;
    } else {
        document.getElementById("start").style.opacity = 0.25;
    }
    
    switch (colors_to_generate) {
        case 0:
            document.getElementById("all_colors").style.opacity = 0.25;
            document.getElementById("cool_colors").style.opacity = 1;
            document.getElementById("warm_colors").style.opacity = 1;
            
            break;
        case 1:
            document.getElementById("all_colors").style.opacity = 1;
            document.getElementById("cool_colors").style.opacity = 0.25;
            document.getElementById("warm_colors").style.opacity = 1;
            
            break;
        case 2:
            document.getElementById("all_colors").style.opacity = 1;
            document.getElementById("cool_colors").style.opacity = 1;
            document.getElementById("warm_colors").style.opacity = 0.25;
            
            break;
    }
    
    switch (colors_to_alter) {
        case 0:
            document.getElementById("regular_colors").style.opacity = 0.25;
            document.getElementById("darker_colors").style.opacity = 1;
            document.getElementById("pastel_colors").style.opacity = 1;
            
            break;
        case 1:
            document.getElementById("regular_colors").style.opacity = 1;
            document.getElementById("darker_colors").style.opacity = 0.25;
            document.getElementById("pastel_colors").style.opacity = 1;
            
            break;
        case 2:
            document.getElementById("regular_colors").style.opacity = 1;
            document.getElementById("darker_colors").style.opacity = 1;
            document.getElementById("pastel_colors").style.opacity = 0.25;
            
            break;
    }
}




//generation control functions
function next() {
    if (pixels_to_generate >= 1 && pixels_to_generate <= 50 && speed >= 1000 && speed <= 30000) {
        stop_loop();
        store_palette_info();
        randomize_pixels();
        set_selected_options();
    }
}

function start_loop() {
    if (pixels_to_generate >= 1 && pixels_to_generate <= 50 && speed >= 1000 && speed <= 30000) {
        loop = true;

        store_palette_info();
        randomize_pixels();
        set_selected_options();
    }
}

function stop_loop() {
    loop = false;
    
    document.getElementById("start").style.opacity = 1;
}