<Text Input
style={styles.inputBox}
onChangeText={ text => {
    this.setState({
        text: text,
        isSearchPressed: false,
        word : "Loading...",
        lexicalCategory :'',
        examples : [],
        defination : ''''
    });
}}
value={ this.state.text}
/>

<TouchableOpacity
style={styles.searchButton}
onPress={ () => {
    this.setState({ isSearchPressed: true});
    this.getWord(this.state.text)
}>

getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+.json"
    //console.log(url)
    return fetch(url)
    .then((data)=>{
        if(data.status===200)
        {
            return data.json()
        }
        else
        {
            return null
        }
    }
})

.then((response)=>{
    //console.log(response)

    var responseObject = response
  // var word = responseObject.word
    // var lexicalCategory = responseObject.results[0].lexicalEntries[0]. lexicalCategory.text
    if(responseObject)
    {
        var wordData= responseObject.definations[0]
        //console.log(responseObject.definitions[0])
        var definition=wordData.description
        var lexicalCategory=wordData.wordtype
        //console.log(lexicalCategory)
        this.setState({
            "word" : this.state.text,
            "definition" :definition,
            "lexicalCategory": lexicalCategory
        })
    }
}
{
else 
{
    this.setState({
        "word":this.state.text,
        "definition": "Not Found",
    })
}
}
<view style={styles.detailsContainer}>
    <Text sty={Styles.detailsTile}>
        Word :{""}
    </Text>
    <Text style={{fontSize:18}}>
        {this.state.word}
    </Text>
</view>

<view style={styles.detailsContainer}>
    <Text style={styles.detailsTile}>
        Type:{""}
    </Text>
    <Text style={{fontSize:18}}>
        {this.state.lexicalCategory}
    </Text>
</view>

<view style={{flexDirection:'row',flexWrap: 'wrap'}}>
    <Text style={styles.detailsTitle}>
        definition :{""}
    </Text>
    <Text style={{ fontSize:18}}>
        {this.state.definition}
    </Text>
</view>
