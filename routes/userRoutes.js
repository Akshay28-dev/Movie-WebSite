const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

var  privateKey = 'jhgiguyngfuigvuigvdnfusdygfudsgvnutigfnvut';
var registerFile = './jsonfile/register.json';

router.get('/register', function(req, res){
  res.render('register')
})


router.post('/register', function(req, res){
  // res.render('register')
  var user = req.body;
  console.log(user)

  bcrypt
    .hash(user.password, 10)
    .then(function(hashPassword){
      // console.log(hashPassword);

      var id = uuid();
      console.log(id)
      jwt.sign({id: id}, privateKey, { expiresIn: 60 * 60 * 1 }, function(err, token){
        
        if(err) return res.status(501).send('Server Not Found')
        else{
        
        fs.readFile(registerFile, { encoding: 'utf-8' }, function(err, data){
          if(err) return res.status(501).send('Server Not Found')
          else{

              var userJavascript = JSON.parse(data);
              var userCheck = userJavascript.find(function(data){
                return data.email === req.body.email
              })
              
              if(userCheck != undefined){
                return res.status(501).send('Email is ALready Registereed')
              }
              
              var userObj = {
                id: id,
                name: user.name,
                email: user.email,
                phno: user.mobile,
                password: hashPassword,
                token: token,
                createdAt: new Date()
              };
  
              userJavascript.push(userObj);
              var userJSON = JSON.stringify(userJavascript);
  
              fs.writeFile(registerFile, userJSON, function(err){
                if(err) return res.status(501).send('Server Not Found')
              })
              
              res.redirect('/')
            }
        })
        }
      })
    })
})

module.exports = router