/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
		new:function (req, res){
		res.view()
	},
	create:function(req, res){
		var EstudianteObj={
			nombre:req.param('txtnombre')
		}
		Estudiante.create(EstudianteObj,function(err,user){
			if(err){ 
				console.log(JSON.stringify(err));
			    return res.redirect('/estudiantes');
			}
				res.redirect('/estudiante');
		});
	}
	
	
};

