import express from "express";
const router = express.Router();
import { Movies } from "../models/MovieModel.js";
import { isAuthenticated } from "../controllers/authorization.js";

router.post("/addMovies", (req, res) => {
  try {
    let newMovie = new Movies(req.body);

    newMovie
      .save()
      .then((data) => {
        res.status(200).send({ message: "Movie Added Successfully", data });
      })
      .catch((error) => {
        res
          .status(400)
          .send({ message: "Something error while adding Movies" });
      });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/getAllMovies", isAuthenticated, (req, res) => {
  try {
    Movies.find()
      .then((data) => {
        res
          .status(200)
          .send({ message: "Movies has been retrieved", data: data });
      })
      .catch((error) => {
        res.status(400).send({ message: "Something Error while retrieving" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/childrens", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ type: "childrens" }] }).then((data) => {
      res.status(200).send({ message: "childrens Movies", data });
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/madeinindia", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ type: "made in india" }] }).then((data) => {
      res.status(200).send({ message: "indian Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/korian", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ type: "k dramas" }] }).then((data) => {
      res.status(200).send({ message: "korian Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/exciting", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ type: "exciting" }] }).then((data) => {
      res.status(200).send({ message: "exciting Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/sci-fi", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ type: "sci-fi" }] }).then((data) => {
      res.status(200).send({ message: "sci-fi Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langtamil", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "Tamil" }] }).then((data) => {
      res.status(200).send({ message: "Tamil Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langenglish", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "English" }] }).then((data) => {
      res.status(200).send({ message: "English Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langtelugu", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "Telugu" }] }).then((data) => {
      res.status(200).send({ message: "Telugu Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langmalayalam", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "Malayalam" }] }).then((data) => {
      res.status(200).send({ message: "Malayalam Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langhindi", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "Hindi" }] }).then((data) => {
      res.status(200).send({ message: "Hindi Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/langkannada", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ languages: "Kannada" }] }).then((data) => {
      res.status(200).send({ message: "Kannada Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// router.get("/indtamil", (req, res) => {
//   try {
//     Movies.find({ $or: [{ industry: "Kollywood" }] }).then((data) => {
//       res.status(200).send({ message: "Tamil Movies", data });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// router.get("/indmalayalam", (req, res) => {
//   try {
//     Movies.find({ $or: [{ industry: "Mollywood" }] }).then((data) => {
//       res.status(200).send({ message: "Malayalam Movies", data });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// router.get("/indhindi", (req, res) => {
//   try {
//     Movies.find({ $or: [{ industry: "Bollywood" }] }).then((data) => {
//       res.status(200).send({ message: "Hindi Movies", data });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// router.get("/indtelugu", (req, res) => {
//   try {
//     Movies.find({ $or: [{ industry: "Tollywood" }] }).then((data) => {
//       res.status(200).send({ message: "Telugu Movies", data });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// router.get("/indkannada", (req, res) => {
//   try {
//     Movies.find({ $or: [{ industry: "sandalwood" }] }).then((data) => {
//       res.status(200).send({ message: "Kannada Movies", data });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

router.get("/action", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ genres: "Action" }] }).then((data) => {
      res.status(200).send({ message: "Action Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/thriller", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ genres: "Thriller" }] }).then((data) => {
      res.status(200).send({ message: "Thriller Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/crime", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ genres: "Crime" }] }).then((data) => {
      res.status(200).send({ message: "Crime Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/horror", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Horror" }] }).then((data) => {
      res.status(200).send({ message: "Horror Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Kollywood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Kollywood" }] }).then((data) => {
      res.status(200).send({ message: "Kollywood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Hollywood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Hollywood" }] }).then((data) => {
      res.status(200).send({ message: "Hollywood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Bollywood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Bollywood" }] }).then((data) => {
      res.status(200).send({ message: "Bollywood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Mollywood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Mollywood" }] }).then((data) => {
      res.status(200).send({ message: "Mollywood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Tollywood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Tollywood" }] }).then((data) => {
      res.status(200).send({ message: "Tollywood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/Sandalwood", isAuthenticated, (req, res) => {
  try {
    Movies.find({ $or: [{ industry: "Sandalwood" }] }).then((data) => {
      res.status(200).send({ message: "Sandalwood Movies", data });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

export const movieRoute = router;
