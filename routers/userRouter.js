const express = require ('express');
const userControllers = require('../controllers/userController')



const router = express.Router();

router.get('/',userControllers.user_get );
  
  /** Process POST request */
 router.post('/',userControllers.user_post );

  //find by id
router.get('/:id' ,userControllers.get_user_id );

router.delete('/:id' , userControllers.user_delete)

module.exports=router;