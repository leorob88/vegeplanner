import { typesBoxes, intolBoxes, cuisBoxes, timeRadios, resultRadios } from "./lists";

function GetUrl() {

  let readTypes = typesBoxes.filter(box => document.getElementById(box.key).checked).map(function (box) { return box.key });
  let readIntolerances = intolBoxes.filter(box => document.getElementById(box.key).checked).map(function (box) { return box.key });
  let readCuisine = cuisBoxes.filter(box => document.getElementById(box.key).checked).map(function (box) { return box.key });
  let readTime = timeRadios.filter(radio => document.getElementById(`radio${radio.key}`).checked).map(function (radio) { return radio.key });
  let readNumber = resultRadios.filter(radio => document.getElementById(`radio${radio.key}`).checked).map(function (radio) { return radio.key });
  let typesFilters = "", intolFilters = "", cuisFilters = "", timeFilter = "", numberFilter = "";
  if (readTypes.length > 0) {
    typesFilters = "&type=";
    for (let i = 0; i < readTypes.length; i++) {
      typesFilters += readTypes[i] + ",";
    }
  } else {
    typesFilters = "";
  }
  if (readIntolerances.length > 0) {
    intolFilters = "&intolerances=";
    for (let i = 0; i < readIntolerances.length; i++) {
      intolFilters += readIntolerances[i] + ",";
    }
  } else {
    intolFilters = "";
  }
  if (readCuisine.length > 0) {
    cuisFilters = "&cuisine=";
    for (let i = 0; i < readCuisine.length; i++) {
      cuisFilters += readCuisine[i] + ",";
    }
  } else {
    cuisFilters = "";
  }
  if (readTime.length > 0) {
    timeFilter = `&maxReadyTime=${readTime}`;
  }
  if (readNumber.length > 0) {
    numberFilter = `&number=${readNumber}`;
  } else {
    numberFilter = "&number=100";
  }
  let urlFilters = typesFilters + intolFilters + cuisFilters + timeFilter + numberFilter;
  let userQuery = document.getElementById("text").value.toLowerCase();
  userQuery = userQuery !== "" ? `&query=${userQuery}` : "";
  let baseUrl = "https://api.spoonacular.com/recipes/complexSearch?";
  let apiKey = `&apiKey=${process.env.REACT_APP_API_KEY}`;
  let prevFilters = "&instructionsRequired=true&diet=vegetarian&addRecipeNutrition=true";
  let urlRequest = `${baseUrl}${apiKey}${prevFilters}${urlFilters}${userQuery}`;
  return (urlRequest)
}

export default GetUrl;