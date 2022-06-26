using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaTecnicaAPI.Models;

namespace PruebaTecnicaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListTablesController : ControllerBase
    {
        private readonly PruebaTecnicaContext _context;

        public ToDoListTablesController(PruebaTecnicaContext context)
        {
            _context = context;
        }

        // GET: api/ToDoListTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoListTable>>> GetToDoListTables()
        {
          if (_context.ToDoListTables == null)
          {
              return NotFound();
          }
            return await _context.ToDoListTables.ToListAsync();
        }

        // GET: api/ToDoListTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoListTable>> GetToDoListTable(int id)
        {
          if (_context.ToDoListTables == null)
          {
              return NotFound();
          }
            var toDoListTable = await _context.ToDoListTables.FindAsync(id);

            if (toDoListTable == null)
            {
                return NotFound();
            }

            return toDoListTable;
        }

        // PUT: api/ToDoListTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoListTable(int id, ToDoListTable toDoListTable)
        {

            _context.Entry(toDoListTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoListTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ToDoListTables
        [HttpPost]
        public async Task<ActionResult<ToDoListTable>> PostToDoListTable(ToDoListTable toDoListTable)
        {
          if (_context.ToDoListTables == null)
          {
              return Problem("Entity set 'PruebaTecnicaContext.ToDoListTables'  is null.");
          }
            _context.ToDoListTables.Add(toDoListTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDoListTable", new { id = toDoListTable.Id }, toDoListTable);
        }

        // DELETE: api/ToDoListTables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToDoListTable(int id)
        {
            if (_context.ToDoListTables == null)
            {
                return NotFound();
            }
            var toDoListTable = await _context.ToDoListTables.FindAsync(id);
            if (toDoListTable == null)
            {
                return NotFound();
            }

            _context.ToDoListTables.Remove(toDoListTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToDoListTableExists(int id)
        {
            return (_context.ToDoListTables?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
