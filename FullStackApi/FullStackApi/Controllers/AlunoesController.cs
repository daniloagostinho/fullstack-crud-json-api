using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using FullStackApi.Models;
using System.Web.Http.Cors;

namespace FullStackApi.Controllers
{
  [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
  public class AlunoesController : ApiController
    {
        private fullstack_dbEntities db = new fullstack_dbEntities();

        // GET: api/Alunoes
        public IQueryable<Aluno> GetAlunos()
        {
            return db.Alunos;
        }

        // GET: api/Alunoes/5
        [ResponseType(typeof(Aluno))]
        public IHttpActionResult GetAluno(int id)
        {
            Aluno aluno = db.Alunos.Find(id);
            if (aluno == null)
            {
                return NotFound();
            }

            return Ok(aluno);
        }

        // PUT: api/Alunoes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAluno(int id, Aluno aluno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aluno.AlunosId)
            {
                return BadRequest();
            }

            db.Entry(aluno).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlunoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Alunoes
        [ResponseType(typeof(Aluno))]
        public IHttpActionResult PostAluno(Aluno aluno)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Alunos.Add(aluno);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (AlunoExists(aluno.AlunosId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = aluno.AlunosId }, aluno);
        }

        // DELETE: api/Alunoes/5
        [ResponseType(typeof(Aluno))]
        public IHttpActionResult DeleteAluno(int id)
        {
            Aluno aluno = db.Alunos.Find(id);
            if (aluno == null)
            {
                return NotFound();
            }

            db.Alunos.Remove(aluno);
            db.SaveChanges();

            return Ok(aluno);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AlunoExists(int id)
        {
            return db.Alunos.Count(e => e.AlunosId == id) > 0;
        }
    }
}
