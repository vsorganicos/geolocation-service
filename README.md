# geolocation-service
Microserviços de Geolocalização

<h3>Cálculo da distância entre 2 coordenadas geográficas (latitude/longitude)</h3>

Resource: <strong>/geolocation/calculate-distance-between-two-points</strong>
Method: <strong>POST</strong>
<h4>Request Payload</h4>

Exemplo: <code>
{
	points  {
		from : {
			lat: -23.5388,
			lgt: -46.6755
		},
		to : {
			lat: -23.5388,
			lgt: -46.6755
		}
	}
}
</code>
