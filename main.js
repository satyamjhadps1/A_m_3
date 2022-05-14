var rock_1 = " ";
var rock_2 = " ";
var p_1 = " ";
var p_2 = " ";
var dj_1 = " ";
var dj_2 = " ";
var rap_1 = " ";
var rap_2 = " ";
var song = "";
rock = 0;
k_pop = 0;
rap = 0;
dj = 0;
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_y = 0;
right_wrist_x = 0;

function preload(){
    rock_1 = loadSound("believer_rock.mp3");
    rock_2 = loadSound("all_summer_long_rock.mp3");
    p_1 = loadSound("shape_of_you.mp3");
    p_2 = loadSound("ddu_ddu.mp3");
    dj_1 = loadSound("Spectre_Dj.mp3");
    dj_2 = loadSound("fade_dj.mp3");
    rap_1 = loadSound("cold_rap.mp3");
    rap_2 = loadSound("fed_up_rap.mp3");
}

function setup(){
    canvas = createCanvas(450, 400);
    canvas.position(410, 160);
    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();
    poseNet = ml5.poseNet(video, mdl);
    poseNet.on("pose", gotPoses);
}

function mdl(){
    console.log("Posenet Is Initiallized")
}

function draw(){
    image(video, 0, 0, 450, 400);
}
function rockstar(){
    if(song == "Believer"){
        rock = 1;
    }
    if(song == "AllSummerLong"){
        rock = 0;
    }
    if (rock == 0){
        console.log(rock)
        song = "Believer";
        play(song);
    }
    if(rock == 1){
        console.log(rock)
        song = "AllSummerLong";
        play(song);                
    }
}

function e_pop(){
    if(song == "shapeofyou"){
        k_pop = 1
    }
    if(song == "dduddu"){
        k_pop = 0;
    }
    if (k_pop == 0){
        console.log(k_pop)
        song = "shapeofyou";
        play(song);
    }
    if(k_pop == 1){
        console.log(k_pop)
        song = "dduddu";
        play(song);                
    }
}

function raper(){
    if(song == "cold"){
        rap = 1
    }
    if(song == "fedup"){
        rap = 0;
    }
    if (rap == 0){
        console.log(rap)
        song = "cold";
        play(song);
    }
    if(rap == 1){
        console.log(rap)
        song = "fedup";
        play(song);                
    }
}

function dj_r(){
    if(song == "spectre"){
        dj = 1
    }
    if(song == "fade"){
        dj = 0;
    }
    if (dj == 0){
        console.log(dj)
        song = "spectre";
        play(song);
    }
    if(dj == 1){
        console.log(dj)
        song = "fade";
        play(song);                
    }
}

function play(play_song){
    if (play_song == "Believer"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Rock and The Song Is : Beliver and the band Is : Imagine Dragons"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_2.stop();
        rock_1.play();
    };
    if(play_song == "AllSummerLong"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Rock and The Song Is : All Summer Long and the band Is : Kid Rock"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.play();
    };
    if(play_song == "shapeofyou"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Pop(english) and The Song Is : Shape Of You and the singer Is : Ed Sheeran"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.play();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(play_song == "dduddu"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Kpop and The Song Is : dduddu and the band Is : BLACKPINK"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.play();
        rock_1.stop();
        rock_2.stop();
    };
    if(play_song == "cold"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : rap and The Song Is : cold and the band Is : Neffex"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.play();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(play_song == 'fedup'){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : rap and The Song Is : Fed Up and the band Is : Ghostmane"
        rap_2.play();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(play_song == "spectre"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : dj remix and The Song Is : Spectre and the singer is : Alan Walker"
        rap_2.stop();
        dj_1.play();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(play_song == "fade"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : dj remix and The Song Is : fade and the singer is : Alan Walker"
        rap_2.stop();
        dj_1.stop();
        dj_2.play();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
}

function stop(){
    rap_2.stop();
    dj_1.stop();
    dj_2.stop();
    rap_1.stop();
    p_1.stop();
    p_2.stop();
    rock_1.stop();
    rock_2.stop();
}

function play_new(){
    if (song == "Believer"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Rock and The Song Is : Beliver and the band Is : Imagine Dragons"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_2.stop();
        rock_1.play();
    };
    if(song == "AllSummerLong"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Rock and The Song Is : All Summer Long and the band Is : Kid Rock"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.play();
    };
    if(song == "shapeofyou"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Pop(english) and The Song Is : Shape Of You and the singer Is : Ed Sheeran"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.play();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(song == "dduddu"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : Kpop and The Song Is : dduddu and the band Is : BLACKPINK"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.play();
        rock_1.stop();
        rock_2.stop();
    };
    if(song == "cold"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : rap and The Song Is : cold and the band Is : Neffex"
        rap_2.stop();
        dj_1.stop();
        dj_2.stop();
        rap_1.play();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(song == 'fedup'){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : rap and The Song Is : Fed Up and the band Is : Ghostmane"
        rap_2.play();
        dj_1.stop();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(song == "spectre"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : dj remix and The Song Is : Spectre and the singer is : Alan Walker"
        rap_2.stop();
        dj_1.play();
        dj_2.stop();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
    if(song == "fade"){
        document.getElementById("m_topic").innerHTML = "The Topic of music is : dj remix and The Song Is : fade and the singer is : Alan Walker"
        rap_2.stop();
        dj_1.stop();
        dj_2.play();
        rap_1.stop();
        p_1.stop();
        p_2.stop();
        rock_1.stop();
        rock_2.stop();
    };
}

function gotPoses(results){
    if (results.length > 0){
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_y = results[0].pose.rightWrist.y;

        console.log("Left Wrist X : " + left_wrist_x + ", Right Wrist X : " + right_wrist_x + ", Left Wrist Y : " + left_wrist_y + " and Right Wrist Y : " + right_wrist_y)
    }
}