//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「ランキングを見る」ボタン押下時の処理
function toRanking() {
    // データ取得
    checkRanking();
    // ランキング画面へ遷移
    window.location.href = "#ranking-page";
}

function toList() {
    // データ取得
    sortData();
    // ランキング画面へ遷移
    window.location.href = "#battle-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRanking() {
    // **********【問題２】ランキングを表示しよう！**********
    let gameScore = ncmb.DataStore("Gamescore");

    gameScore.order("score", true).limit(8).fetchAll()
        .then(function(results) {
            console.log("検索に成功しました。");
            setData(results);
        })
        .catch(function(error) {
            console.log("検索に失敗しました。エラー:" + error);
        })
    // ******************************************************
}
function sortData() {
    let gameScore = ncmb.DataStore("Gamescore");
    gameScore.order("createDate", true).limit(8).fetchAll()
        .then(function(results) {
            console.log("検索に成功しました。");
            setData1(results);
            setData(results);
        })
        .catch(function(error) {
            console.log("検索に失敗しました。エラー:" + error);
        })
}
function searchScoreLT() {
    let gameScore = ncmb.DataStore("Gamescore");
    let score = parseInt($("#score").val());
    gameScore.lessThan("score",score).limit(8).fetchAll()
        .then(function(results) {
            setData1(results);
        })
    }
    function searchScoreGT() {
    let gameScore = ncmb.DataStore("Gamescore");
    let score = parseInt($("#score").val());
    gameScore.greaterThan("score",score).limit(8).fetchAll()
        .then(function(results) {
            setData1(results);
        })
    }

// テーブルにデータを設定
function setData(array) {
   var table = document.getElementById("rankingTable");
    for (i=0; i<array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score + "連打";
    }
}
function setData1(array) {
   var table = document.getElementById("battleTable");
    for (i=0; i<array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score + "連打";
    }
}







