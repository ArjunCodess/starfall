import { pricingTiers } from "@/app/data"
import { Check, HelpCircle, X } from "lucide-react"

export default function Pricing() {
    return (
        <div className="flex justify-center items-center text-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
                {pricingTiers.map((tier, index) => (
                    <div
                        key={index}
                        className={`flex flex-col p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 ${tier.highlighted
                            ? "bg-neutral-800 border-2 border-blue-400 shadow-2xl shadow-blue-400/20"
                            : "bg-neutral-800"
                            }`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                        <div className="text-3xl font-bold mb-2">
                            {tier.price}
                            <span className="text-lg font-normal text-neutral-400">/month</span>
                        </div>
                        <button
                            className={`py-2 px-4 rounded-full font-semibold mb-4 ${tier.highlighted
                                ? "bg-blue-400 text-neutral-900 hover:bg-blue-300"
                                : "bg-neutral-700 hover:bg-neutral-600"
                                }`}
                        >
                            {tier.buttonText}
                        </button>
                        <p className="text-sm text-neutral-400 mb-6">{tier.description}</p>
                        <ul className="space-y-2 flex-grow">
                            {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm">
                                    {feature.included ? (
                                        <Check className="w-5 h-5 mr-2 text-blue-400" />
                                    ) : (
                                        <X className="w-5 h-5 mr-2 text-neutral-600" />
                                    )}
                                    <span className={feature.included ? "" : "text-neutral-500"}>
                                        {feature.name}
                                    </span>
                                    {feature.name.includes("included") && (
                                        <HelpCircle className="w-4 h-4 ml-1 text-neutral-500" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}