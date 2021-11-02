//this program is to generate/display labels with whole folder path 

function CrtFlr(name, parentID=0){
    this.parentID = parentID;
    this.name = name;
    this.id = getSeq();
}

function getFullPath(elem){
    let elemFullPath = '';
    let tmpParentID = elem.parentID;

    for (cntr=0;cntr<allFlrs.length;cntr++){
        loopCounter++; //just to check # of times looped 
        if (allFlrs[cntr].id === tmpParentID){
            elemFullPath = elemFullPath + allFlrs[cntr].name;
            tmpParentID = allFlrs[cntr].parentID;
            console.log('tmpParentID :',tmpParentID);
            console.log('allFlrs[cntr].parentID :',allFlrs[cntr].parentID);
            if (tmpParentID === 0){
                break;
            }else{
                elemFullPath = getFullPath(allFlrs[cntr]) + '/' + elemFullPath ;
            }
        }
    }

    return elemFullPath;
}

let loopCounter = 0;
const IdGenerator = function (value = 0) {
    let counter = value;
    return function () {counter += 1; return counter}
}; 

const getSeq = IdGenerator(); //1st execution

const inbox = new CrtFlr('Inbox');
const sent = new CrtFlr('Sent');
const draft = new CrtFlr('Draft');
const outbox = new CrtFlr('Outbox');
const fromJan = new CrtFlr('FromJan',1);
const dhisha = new CrtFlr('Dhisha',5);
const fromPS = new CrtFlr('FromPS',3);
const work = new CrtFlr('Work',2);
const cognizant = new CrtFlr('Cognizant',8);
const imp = new CrtFlr('Important',9);

const allFlrs = [sent,draft,outbox,fromJan,dhisha,work,cognizant,fromPS,imp,inbox];
//const allFlrs = [work,cognizant,sent,imp];

const allFlrsPath = [];
let idx = 0;
allFlrs.forEach(elem => {
                loopCounter++;
                if (elem.parentID == 0){
                    allFlrsPath[idx] = {name: elem.name,
                                        id:elem.id,
                                        parentID: elem.parentID,
                                        fullPath: elem.name};
                                    }
                else{
                    allFlrsPath[idx] = {name: elem.name,
                                        id:elem.id,
                                        parentID: elem.parentID,
                                        fullPath: getFullPath(elem) + '/' + elem.name,};
                }
               idx = idx+1;
});

console.log('Full Path :',allFlrsPath.filter(n => {
    return n.parentID !== 0;
}));
console.log('Number of times looped :',loopCounter);