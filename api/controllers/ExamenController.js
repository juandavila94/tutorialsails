/**
 * ExamenController
 *
 * @description :: Server-side logic for managing examen
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		new:function (req, res){
		res.view()
	},
	create:function(req, res){
		var ExamenObj={
			nombre:req.param('txtnombre'),
			nota:req.param('txtnota'),
			estudiante:req.param('txtexamen')
		}
		Examen.create(ExamenObj,function(err,mesa){
			if(err){ 
				console.log(JSON.stringify(err));
			}
			    Estudiante.find(req.param('txtexamen')).populate('examenes').exec(function(err, users) {
                     if(err){	console.log(JSON.stringify(err));}
				res.redirect('/estudiante');	});
		});
		
			},
	
	cambiar:function(req, res){
		
		Estudiante.find({nombre:req.param('txtestudiante')}).populateAll().exec(function (err, estud){
			
			if (err) { console.log(err);  }
			
			else{
			console.log( estud);
			 estud.forEach(function(est) {
			
			Examen.find({estudiante:est.id}).exec(function (err, es){
			
			if (err) { console.log(err);  }
			
				es.forEach(function(x) {
			
					if(x.nota=req.param('txtnota'))
			
					Examen.update({nota:x.nota},{nota:req.param('txtnota2')}).exec(function afterwards(err, updated){

					if (err) {console.log(err)}
					});
			
					 });

				});
			
			 });
			}
			
			
		});
			res.redirect('/estudiante');
		
	}
	
};