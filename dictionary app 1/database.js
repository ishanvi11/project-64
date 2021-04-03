import dictionary from '../database';
var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text] ["lexicalCategory"]
var definition = dictionary[text] ["definition"]
this.setState({
    "word" : word,
    "lexicalCategory": lexicalCategory,
    "definition" :definition
})

getWord=(text)=>{
    var text = text.toLower()
    try{
        var word = dictionary[text] ["word"]
        var lexicalCategory= dictionary[text] ["definition"]
        this.setState({
            "word": word,
            "lexicalCategory" : lexicalCategory,
            "definition" : definition
        })
    }
    catch(err){
        alert("the word is not available")
        this.setState({
            'text':'',
            'isSearchPressed': false
        })
    }
}