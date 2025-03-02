const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://@cluster0.16nso.mongodb.net/')
.then(()=>console.log("database connected successfully"))
.catch((e)=>console.log(e));

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    isActive : Boolean,
    tags :[String],
    createdAt: {
        type: Date,
        default: Date.now 
    },
});

//create user model

const User = mongoose.model('User',userSchema);

async function runQueryExamples() {
    try{
        //create a new document
        const newUser = await User.create({
            name : 'Deleted User',
            email :'deleteduser@gmail.com',
            age : 75,
            isActive : true,
            tags :['developer'],
        })
        // const newUser = new User({
        //     name : 'sham',
        //     email :'sham@gmail.com',
        //     age : 22,
        //     isActive : true,
        //     tags :['developer','designer','manager'],
        // })
        // await newUser.save();
        console.log('Created new user : ',newUser);

        //get all users
        //const allUsers  = await User.find({}); 
       // console.log(allUsers);

       //get specific user
    //    const getUserOfActiveFalse = await User.find({isActive:false});
    //    console.log(getUserOfActiveFalse);

    // const getRamUser = await User.findOne({
    //     name :'ram'
    // });
    // console.log(getRamUser);

    // const getLastCreatedUserByUserId =  await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId);
    
    // const selectedSpecificField = await User.find().select('name email -_id');
    // console.log(selectedSpecificField);

    // const limitedUser = await User.find().limit(5).skip(1);
    // console.log(limitedUser);

    // const sortedUser = await User.find().sort({age : -1});
    // console.log(sortedUser);

    // const countDocuments = await User.countDocuments({isActive:true});
    // console.log(countDocuments);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log('deleted user :' ,deletedUser);

    const updateUser = await User.findByIdAndUpdate(
        newUser._id,
        {
          $set: { age: 100 },
          $push: { tags: "updated" },
        },
        { new: true }
      );
      console.log("updated user", updateUser);
    }
    catch(e){
        console.log('Error ->',e);
    }
    finally{
        await mongoose.connection.close();
    }
    
}

runQueryExamples();