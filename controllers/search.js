let models  = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const search = function(req, res, next)
{
    let params = req.query;
    let keywords = '';
    let offset = 0;
    let limit = 15;
    let current_page = 1;
    if (params.hasOwnProperty('keyword')) {
        keywords =  params.keyword;
    }
    if (params.hasOwnProperty('current_page')) {
        offset =  (parseInt(params.current_page)-1)*limit;
        current_page = parseInt(params.current_page);
    }
    console.log(current_page)

    var keywordArray = parsingKeyword(keywords);
    let where = {};
    let like_param = []
    for (const index in keywordArray) {
        like_param.push(
            {   
                title:{
                    [Op.like]:'%'+keywordArray[index]+'%'
                }             

            },
            {
                 property:{
                    [Op.like]:'%'+keywordArray[index]+'%'
                },
            }
        );
                
    }
    console.log(current_page)
    where = {
        [Op.or]:like_param
    }   
    try {
        models.DataWare.findAll({
            where:where,
            offset: offset,
            limit: limit
        }).then(function(result) {
            models.DataWare.count({where:where}).then(count => {
                res.render('pages/index', { data: result, total_page:count,  keyword: keywords, current_page: current_page, pagination: pagination(current_page, parseInt(count/limit+1)) });            
            }); 
        }).catch(err=>{
            res.render('pages/index', { data: [], total_page:0,  keyword: keywords, current_page: current_page, pagination: pagination(current_page, parseInt(0/limit+1)) });            
        });
    } catch (error) {
        res.render('pages/index', { data: [], total_page:0,  keyword: keywords, current_page: current_page, pagination: pagination(current_page, parseInt(0/limit+1)) });            
        
    }
}
   



const pagination = (c , m) => {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;
    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;

}
const parsingKeyword = (params) => {
    let keywords = params.split(' ');
    let return_words = []
    
    for (const key in keywords) {
        if (!keywords[key]) {
           continue;            
        }
        return_words.push(keywords[key])
    }

    return return_words;
}

const home = function(req, res) {	 
    let current_page = 1;
    res.render('pages/index', { data: [], total_page:0,  keyword: '', current_page: current_page, pagination: [] });
}
module.exports = {
    home,
    search
};

    
