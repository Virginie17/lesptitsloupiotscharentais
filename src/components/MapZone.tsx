import { MapPin } from "lucide-react"

export function MapZone() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
      <h2 className="text-3xl font-bold text-center mb-8">Visualisation de la zone</h2>
      <div className="aspect-video bg-gradient-to-br from-blue-sky/30 to-rose-powder/30 rounded-2xl flex items-center justify-center mb-6">
        <div className="text-center">
          <MapPin className="text-rose-powder mx-auto mb-4" size={80} />
          <p className="text-2xl font-bold text-gray-dark mb-2">La Rochelle</p>
          <div className="inline-block border-4 border-dashed border-rose-powder rounded-full w-48 h-48 flex items-center justify-center">
            <p className="text-lg font-semibold text-gray-dark">Rayon<br />20 km</p>
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">
        Carte interactive à venir prochainement
      </p>
    </div>
  )
}
