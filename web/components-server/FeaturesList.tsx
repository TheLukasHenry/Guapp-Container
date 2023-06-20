import { Feature } from '../generated-api/models/Feature'
import FeatureComponent from '../components-client/Feature'

type FeatureListProps = {
  features: Feature[]
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div>
      <h2>Features</h2>
      {features.map((feature) => {
        return (
          <div key={feature.id}>
            <FeatureComponent feature={feature} />
          </div>
        )
      })}
    </div>
  )
}
