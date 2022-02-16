const User = require ('../model/user');

const user_get = (req, res) => {
   
    User.find()
    .then((result) => {
        res.render('index', {users:result});
    })
    .catch((err) => console.log(err))
  }

  const user_post = (req, res) =>{
    const data =JSON.stringify(req.body)
      const user =new User(JSON.parse(data))
      user.save()
          .then((result) => {
              
              res.redirect('/users')
             
          })
          .catch((err) => console.log(err))
}

const get_user_id = (req,res) => {
    const id =req.params.id;
    
    User.findById(id)
        .then(result => {
            res.render('details', {user:result})
        })
        .catch(err => console.log (err))
    
        
    }

const user_delete = (req,res)=> {
    User.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json({redirect:'/users'})
    })
    .catch(err => console.log (err))
}



module.exports = {
    user_get,
    user_post,
    user_delete,
    get_user_id
}