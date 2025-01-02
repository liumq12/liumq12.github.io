<h1 id="publications"></h1>

<h2 style="margin: 60px 0px -15px;">
  Selected publications 
  <span style="font-size: 15px;">
    [<a href="https://scholar.google.com/citations?user=kEc2UMgAAAAJ&hl=en" target="_blank" style="font-size: 15px;">Google Scholar</a>]
  </span>
</h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
            <abbr class="badge">{{ link.conference_short }}</abbr>
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
  </div>
</div>
</li>

<br>

{% endfor %}

</ol>
</div>


