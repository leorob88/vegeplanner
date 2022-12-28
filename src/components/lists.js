import Box from "./box";
import Radio from "./radios";

const types = ["appetizer", "beverage", "bread", "breakfast", "dessert", "drink", "fingerfood", "main course", "marinade", "salad", "sauce",
    "side dish", "soup", "snack"];
const intolerances = ["dairy", "egg", "gluten", "grain", "peanut", "seafood", "sesame", "shellfish", "soy", "sulfite", "tree nut", "wheat"];
const cuisines = ["african", "american", "british", "cajun", "caribbean", "chinese", "eastern european", "european", "french", "german",
    "greek", "indian", "irish", "italian", "japanese", "jewish", "korean", "latin american", "mediterranean", "mexican",
    "middle eastern", "nordic", "southern", "spanish", "thai", "vietnamese"];
const maxTimes = ["5", "15", "40", "60"]
const howMany = ["10", "20", "50", "100"];

let typesBoxes = types.map(type => <Box key={type} name={type} category={"type"} />);

let intolBoxes = intolerances.map(intol => <Box key={intol} name={intol} category={"intolerances"} />);

let cuisBoxes = cuisines.map(cuis => <Box key={cuis} name={cuis} category={"cuisine"} />);

let timeRadios = maxTimes.map(time => <Radio key={time} number={time} category={"time"} />);

let resultRadios = howMany.map(result => <Radio key={result} number={result} category={"result"} />);

export { typesBoxes, intolBoxes, cuisBoxes, timeRadios, resultRadios };