
// 配合boostrap && bootstrapselect使用
function MThree(domsArr,option){
    this.select1 = document.querySelector(domsArr[0]);
    this.select2 = document.querySelector(domsArr[1]);
    if(domsArr[2] && domsArr[2] !== ""){
        this.select3 = document.querySelector(domsArr[2]);
    }
    this.opts = Object.assign({
        data:"",
        classIdLabel:'code',
        classTextLabel:'name',
        classChildsLabel:'childs'
    },option);
    this.defaultOpt = `<option value="">请选择</option>`;
    this.childrenData = [];
    this.grandsonData = [];
    this.init();
}
MThree.prototype.init = function(){//初始化
    let datas = this.opts.data;
    let options = this.defaultOpt;
    let id = this.opts.classIdLabel,text = this.opts.classTextLabel;
    if(datas.length > 0){
        for(let i=0;i<datas.length;i++){
            options += `<option value="${datas[i][id?id:text]}">${datas[i][text]}</option>`;
        }
        this.select1.innerHTML = options;
    }else{
        this.select1.innerHTML = this.defaultOpt;
    }
    this.select2.innerHTML = this.defaultOpt;
    $(this.select1).selectpicker('refresh').selectpicker('val','');
    $(this.select2).selectpicker('refresh').selectpicker('val','');
    if(this.select3){
        this.select3.innerHTML = this.defaultOpt;
        $(this.select3).selectpicker('refresh').selectpicker('val','');
    }

    this.change();
}
MThree.prototype.change = function(){
    let id = this.opts.classIdLabel?this.opts.classIdLabel:this.opts.classTextLabel,
        text = this.opts.classTextLabel,
        cihlds = this.opts.classChildsLabel;
    this.select1.addEventListener('change', ()=>{
        let data = this.opts.data;
        for(let i=0;i<data.length;i++){
            if(data[i][id] == this.select1.value){
                this.childrenData = data[i][cihlds];
            }
        }
        this.twoOpt = this.threeOpt = this.defaultOpt;
        for(let i=0;i<this.childrenData.length;i++){
            this.twoOpt += `<option value="${this.childrenData[i][id]}">${this.childrenData[i][text]}</option>`
        }
        this.select2.innerHTML = this.twoOpt;
        $(this.select2).selectpicker('refresh').selectpicker('val','');
        if(this.select3){
            this.select3.innerHTML = this.threeOpt;
            $(this.select3).selectpicker('refresh').selectpicker('val','');
        }


    });
    if(this.select3){
        this.select2.addEventListener('change',()=>{
            this.threeOpt = this.defaultOpt;
            for(let i=0;i<this.childrenData.length;i++){
                if(this.select2.value == this.childrenData[i][id]){
                    let childsData = this.childrenData[i][cihlds]?this.childrenData[i][cihlds]:[];
                    for(let j=0;j<childsData.length;j++){
                        this.threeOpt += `<option value="${childsData[j][text]}">${childsData[j][text]}</option>`
                    }
                    
                }
            }
            this.select3.innerHTML = this.threeOpt;
            $(this.select3).selectpicker('refresh').selectpicker('val','');
        })
        
    }
}


