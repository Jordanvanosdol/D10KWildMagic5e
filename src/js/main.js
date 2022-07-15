toggleEnterManualResultVisability();
toggleRollModifierVisability();

function rollWildMagic() {
  const randomResult = Math.floor(Math.random() * 10001).toString();
  document.getElementById('roll_result').innerHTML = "Rolled Result: "+ randomResult;

  if(isModifierValid()){
    setModifiedWildMagicResult();
  }
}

function setModifiedWildMagicResult(){
  const rollRes=parseInt(document.getElementById('roll_result').innerHTML.split(" ")[2].toString());
  const inputMod=parseInt(document.getElementById('inputValid').value.toString());

  if(rollRes + inputMod < 0)
    document.getElementById('total_result').innerHTML = "Total Result: "+ ((rollRes + inputMod) + 10000)
  else
    document.getElementById('total_result').innerHTML = "Total Result: "+ ((rollRes + inputMod) % 10000);
}

function toggleRollModifierVisability(){
  if(document.getElementById('modifierCheckBox').checked){
    document.getElementById('inputModDiv').style.visibility="visible"
    document.getElementById('total_result').style.visibility="visible"
  }
  else{
    document.getElementById('inputModDiv').style.visibility="hidden"
    document.getElementById('total_result').style.visibility="hidden"
  }

}

/***************
*below three function display propper valid/invalid textboxes for static modifier
*/
function updateIsValidModifier() {
  document.getElementById('inputInvalid').value = document.getElementById('inputValid').value;
  validateModifier();
}
function updateIsInValidModifier() {
  document.getElementById('inputValid').value = document.getElementById('inputInvalid').value;
  validateModifier();
}
function validateModifier(){
  if(isModifierValid()){
    document.getElementById('inputValid').type = "text";
    document.getElementById('inputInvalid').type = "hidden";
  }
  else{
    document.getElementById('inputValid').type = "hidden";
    document.getElementById('inputInvalid').type = "text";
  }
}

/*******
 * 
 * 
*/
function toggleEnterManualResultVisability(){
  if(document.getElementById('manualCheckBox').checked){
    document.getElementById('manualInputModDiv').style.visibility="visible"
  }
  else{
    document.getElementById('manualInputModDiv').style.visibility="hidden"
  }
}


function updateManualValidField() {
  document.getElementById('manualInputInvalid').value = document.getElementById('manualInputValid').value;
  validateManualEntry();
}
function updateManualInvalidField() {
  document.getElementById('manualInputValid').value = document.getElementById('manualInputInvalid').value;
  validateManualEntry();
}
function validateManualEntry(){
  if(isManualEntryValid()){
    document.getElementById('manualInputValid').type = "text";
    document.getElementById('manualInputInvalid').type = "hidden";

    document.getElementById('roll_result').innerHTML = "Rolled Result: "+ document.getElementById('manualInputValid').value;

    if(isModifierValid()){
      setModifiedWildMagicResult();
    }
  }
  else{
    document.getElementById('manualInputValid').type = "hidden";
    document.getElementById('manualInputInvalid').type = "text";
  }
}




/**
 * Common Util functions
*/
function isModifierValid(){
  const val = document.getElementById('inputValid').value.toString();
  if(/^\d+$/.test(val.replace('-', '')) && parseInt(val) < 10000 && parseInt(val) > -10000 ){
    return true;
  }
  else{
    return false;
  }
}
function isManualEntryValid(){
  const val = document.getElementById('manualInputValid').value.toString();
  if(/^\d+$/.test(val) && parseInt(val) < 10000 && parseInt(val) > 0 ){
    return true;
  }
  else{
    return false;
  }
}


//WIP
function syncReadFile() {
  const contents = readFileSync("D10000_Wild_Magic.txt", 'utf-8');

  const arr = contents.split(/\r?\n/);

  console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  return arr;
}