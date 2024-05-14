export default function AssignmentEditor() {

  return ( 

      <div id="wd-assignments-editor"> 
      <label htmlFor="wd-name">Assignment Name</label>
      <br/> 
      <input id="wd-name" value="A1 - ENV + HTML" />      
      <br /><br /> 

      <textarea id="wd-description" cols = {30} rows = {10}> The assignment is available online Submit a link to the landing page of your web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignmnets Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page
      </textarea> 
      <br /> 

      <table> 
        <tr> 
          <td align="right" valign="top"> 
             <label htmlFor="wd-points">Points</label> 
          </td> 
        <td> 
          <input id="wd-points" value={100} /> 
        </td> 
        </tr> 
        {/* Complete on your own */} 
        
        <tr> 
          <td align="right" valign="top"> 
             <label htmlFor="wd-group">Assignment Group</label> 
          </td> 
        <td> 
          <select id="wd-group">
		    <option value="COMEDY">ASSIGNMENTS</option>
		    <option value="DRAMA">ASSIGNMENTS</option>
		    <option selected value="SCIFI">ASSIGNMENTS</option>
		    <option value="FANTASY">ASSIGNMENTS</option>
		  </select>
        </td>         
        </tr> 

        <tr> 
          <td align="right" valign="top"> 
             <label htmlFor="wd-display-grade-as">Display Grade as</label> 
          </td> 
        <td> 
          <select id="wd-display-grade-as">
		    <option value="COMEDY">Pecentage</option>
		    <option value="DRAMA">Pecentage</option>
		    <option selected value="SCIFI"> Pecentage</option>
		    <option value="FANTASY">Pecentage</option>
		  </select>
        </td> 
        </tr> 

        <tr> 
          <td align="right" valign="top"> 
             <label htmlFor="wd-submission-type">Submission Type</label> 
          </td> 
        <td> 
          <select id="wd-submission-type">
		    <option value="COMEDY">Online</option>
		    <option value="DRAMA">Online</option>
		    <option selected value="SCIFI">Online</option>
		    <option value="FANTASY">Online</option>
		  </select>
		  <br/>
		  <label>Online Entry Options:</label> 
		  <br/> 
		  <input type="checkbox" name="check-genre" id="wd-text-entry"/>
		  <label htmlFor="wd-text-entry">Text Entry</label>
		  <br/>
		  <input type="checkbox" name="check-genre" id="wd-website-url"/>
		  <label htmlFor="wd-website-url">Website URL</label>
		  <br/>
		  <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
		  <label htmlFor="wd-media-recordings">Media Recordings</label>
		  <br/>
		  <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
		  <label htmlFor="wd-student-annotation">Student Annotation</label>
		  <br/>
		  <input type="checkbox" name="check-genre" id="wd-file-upload"/>
		  <label htmlFor="wd-file-upload">File Uploads</label>
        </td> 
        </tr> 

        <tr>
        <td>
        <label htmlFor="wd-assign-to">Assign Assign to</label>
      
      </td> 
      </tr>
      <tr><td>
      <input id="wd-assign-to" value="Everyone" /> 
      </td></tr>

      <br/>
      <tr><td>
      <label htmlFor="wd-due-date"> Due: </label> 
      </td></tr>
      <tr><td>
		  <input type="date" id="wd-due-date" value="2024-05-13"/>
	  </td></tr>	  
	  <br/>

	  <tr>
	  <td>
	  <label htmlFor="wd-available-from"> Available from: </label> 
	  </td>
	  <td>
	  <label htmlFor="wd-available-until"> Until: </label>
	  </td>
	  </tr>
	  <tr>
	  <td> 
		  <input type="date" id="wd-available-from" value="2024-05-06"/>
	  </td>
	  <td>
		  <input type="date" id="wd-available-untilb" value="2024-05-20"/> 
      </td>
      </tr>
      </table> 
      <hr />

      <button id="wd-all-good" type="button"> Cancle </button>
      <button id="wd-all-good" type="button"> Save </button>
      </div>

  );
}