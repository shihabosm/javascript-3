function calcGarding(score){
    // let gradingScore;
    switch (true){
        case (score <=100 && score >= 90):
            gradingScore = "A"
            break
        case (score <=89 && score >= 70):
            gradingScore = "B"
            break
        case (score <=69 && score >= 60):
            gradingScore = "c"
            break
        case (score <=59 && score >=0):
            gradingScore = "f"
            break
            default:
                case (score > 100 && score < 0):
                    return "Invalid Scroe"
    }
    return ` you got ${ gradingScore } Grade.`
}
const firstPerson = calcGarding(95);
const secondPerson = calcGarding(102);
console .log(firstPerson) 